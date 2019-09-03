import React, { useCallback, useState } from 'react'

/**
 * @typedef {object} HookReturn
 * @property {import('react').ComponentType} Form
 * @property {boolean} hasBeenSubmitted
 */

/**
 * @typedef {object} FormProps
 * @property {import('react').ReactChildren} [props.children]
 * @property {string} [props.className='']
 * @property {import('react').FormEventHandler} [props.onSubmit]
 */

/**
 * A form component that sets the `hasBeenSubmitted` flag to true, whenever
 * the `onSubmit` event is triggered on the form.
 *
 * @type {import('react').ComponentType<FormProps>}
 */
const Form = ({ children = null, className = '', onSubmit = () => {} }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
)

/**
 * Returns a form component and it's state.
 *
 * @param {object} options - `useForm` hook options.
 * @param {Function} [options.onSubmit] - An `onSubmit` event handler to pass on to the `Form` component.
 * @returns {HookReturn} - An object containing the state of the form and the form component.
 */
const useForm = ({ onSubmit = () => {} }) => {
  const [hasBeenSubmitted, setSubmittedState] = useState(false)

  const onSubmitHandler = useCallback(
    (event) => {
      event.preventDefault()
      setSubmittedState(true)
      onSubmit(event)
    },
    [onSubmit],
  )

  return {
    Form: ({ children = null, ...props }) => (
      <Form {...props} onSubmit={onSubmitHandler}>
        {children}
      </Form>
    ),
    hasBeenSubmitted,
  }
}

export default useForm
