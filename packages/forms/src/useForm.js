import { useCallback, useState } from 'react'

/**
 * @typedef {object} HookReturn
 * @property {import('react').FormEventHandler} [props.onSubmit]
 * @property {boolean} hasBeenSubmitted
 */

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
    onSubmit: onSubmitHandler,
    hasBeenSubmitted,
  }
}

export default useForm
