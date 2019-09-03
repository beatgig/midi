import { useState, useEffect, useCallback } from 'react'

import { isNil } from '@beatgig/is'

/**
 * @typedef {object} FieldState
 * @property {boolean} [checked] - Boolean flag provided by radio and checkbox input elements.
 * @property {boolean} dirty - Boolean flag that indicates if the field's value has changed but hasn't been validated yet.
 * @property {string} error - Error message returned by the failed validation.
 * @property {boolean} isValid - Boolean flag that indicates whether or not the field's value is valid.
 * @property {*} rawValue - The field's current raw value.
 * @property {*} value - The field's current value after been formatted by the given `formatter` method.
 */

/**
 * @typedef {object} FieldMethods
 * @property {Function} setValue
 * @property {Function} setValueFromEvent
 * @property {Function} validate
 * @property {Function} validateFromEvent
 */

/**
 * @typedef {FieldState & FieldMethods} Field
 */

/**
 * @typedef {object} FieldEvent
 * @property {HTMLInputElement} target
 * @property {string} target.type
 * @property {boolean} [target.checked]
 */

/**
 * @typedef {Function} FieldEventCallback
 * @returns {FieldState}
 */

/**
 * @type {FieldEventCallback}
 */
const defaultCallback = (state) => state

/**
 * @typedef {Function} DefaultFormatter
 * @param {*} value - The value to format.
 * @returns {*} - The new formatted value.
 */
const defaultFormatter = (value) => value

/**
 * Returns an object representation of a form field.
 *
 * @param {object} options - Options to validate and manage a form field.
 * @param {string} options.name - The name of the field; used by the `useForm` hook to keep track of field values.
 * @param {Function} [options.formatter=DefaultFormatter] - A function used to format the value of the field before validating it.
 * @param {Function[]} [options.validations=[]] - An array of functions used to validate the current value of the field.
 * @param {*} [options.initialValue=''] - The field's default value; used on the initial validation.
 * @param {string} [options.targetProperty='value'] - The field element's property used as the `value` for validation.
 * @param {Function} [options.onError=FieldEventCallback] - Callback function executed when the field validation fails.
 * @param {Function} [options.onChange=FieldEventCallback] - Callback function executed when the field's value changes.
 * @param {Function} [options.onSuccess=FieldEventCallback] - Callback function executed when the field validation is successful.
 * @returns {Field} - The field's state.
 */
const useField = ({
  name,
  formatter = defaultFormatter,
  validations = [],
  initialValue = null,
  targetProperty = 'value',
  onError = defaultCallback,
  onChange = defaultCallback,
  onSuccess = defaultCallback,
}) => {
  if (!name) {
    throw new Error(
      "The useField() hook requires a `name` property to properly track it's value.",
    )
  }

  /**
   * Validates the given `value`.
   *
   * @param {*} value
   * @returns {FieldState}
   */
  const getFieldState = useCallback(
    (value) => {
      let error = null
      let formattedValue = value

      try {
        /**
         * Format the field's value before validating it.
         */
        formattedValue = formatter(value)

        /**
         * Iterate through the `validations` array to validate the field's
         * current `value`. If a validation function returns an error message,
         * stop iterating through `validations` and store the `error`.
         */
        if (Array.isArray(validations)) {
          for (const validation of validations) {
            error = validation(formattedValue)

            if (!isNil(error)) {
              break
            }
          }
        }
      } catch (err) {
        error = err
      }

      return {
        dirty: false,
        error,
        isValid: value && isNil(error),
        rawValue: value,
        value: formattedValue,
      }
    },
    [formatter, validations],
  )

  const [state, setState] = useState(() => {
    const fieldState = getFieldState(initialValue)

    return {
      name,
      ...fieldState,
    }
  })

  const setValue = useCallback(
    /**
     * Sets the given `value` as the field's current value; this will make the
     * field "dirty" because this new value hasn't been validated set
     *
     * @param {*} rawValue - The value to be set as the field's value.
     */
    (rawValue) => {
      let formattedValue

      try {
        formattedValue = formatter(rawValue)
      } catch (err) {
        formattedValue = err
      }

      setState((prevState) => ({
        ...prevState,
        dirty: true,
        isValid: false,
        rawValue,
        value: formattedValue,
      }))
    },
    [formatter],
  )

  const setValueFromEvent = useCallback(
    /**
     * Use this function as your field's event handler for events like `onChange`,
     * `onKeyPress`, etc. It takes the `targetProperty` from the `event` and uses
     * it to set the field's value.
     *
     * @param {FieldEvent} event - The event received by the element's event listener.
     */
    (event) => {
      let formattedValue
      const $target = event.target
      const targetType = $target.type
      const rawValue = $target[targetProperty]

      try {
        formattedValue = formatter(rawValue)
      } catch (err) {
        formattedValue = err
      }

      setState((prevState) =>
        Object.assign(
          {
            ...prevState,
            dirty: true,
            isValid: false,
            rawValue,
            value: formattedValue,
          },
          /**
           * If the element is a checkbox or radio input then attach the
           * `checked` property onto the field's state.
           */
          targetType === 'checkbox' || targetType === 'radio'
            ? { checked: $target.checked }
            : {},
        ),
      )
    },
    [formatter, targetProperty],
  )

  const validate = useCallback(
    /**
     * Validates the given `value` using the `validate` function but instead of
     * returning the field's state, it uses `setState` to update the field.
     *
     * @param {*} value - The value to be validated.
     */
    (value) => {
      setState((prevState) => ({
        ...prevState,
        ...getFieldState(value === undefined ? prevState.value : value),
      }))
    },
    [getFieldState],
  )

  const validateFromEvent = useCallback(
    /**
     * Use this function as your field's event handler for events like `onChange`,
     * `onKeyPress`, etc. It takes the `targetProperty` from the `event` and uses
     * it to set the field's value and validate it.
     *
     * @param {FieldEvent} event - The event received by the element's event listener.
     */
    (event) => {
      const $target = event.target
      const targetType = $target.type

      setState((prevState) =>
        Object.assign(
          {
            ...prevState,
            ...getFieldState($target[targetProperty]),
          },
          /**
           * If the element is a checkbox or radio input then attach the
           * `checked` property onto the field's state.
           */
          targetType === 'checkbox' || targetType === 'radio'
            ? { checked: $target.checked }
            : {},
        ),
      )
    },
    [getFieldState, targetProperty],
  )

  /**
   * Trigger `onChange`, `onError` and `onSuccess` callbacks depending on
   * the validity of the field whenever the `state` changes.
   */
  useEffect(() => {
    onChange(state)

    if (state.error) {
      onError(state)
    } else {
      onSuccess(state)
    }
  }, [state, onError, onChange, onSuccess])

  return {
    ...state,
    setValue,
    setValueFromEvent,
    validate,
    validateFromEvent,
  }
}

export default useField
