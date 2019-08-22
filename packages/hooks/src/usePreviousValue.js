import { useRef, useEffect } from 'react'

/**
 * Returns the previous value.
 *
 * @param {*} value
 * @returns {*}
 */
const usePreviousValue = (value) => {
  const valueRef = useRef()

  /**
   * Store the current `value` in `valueRef` if `value` changes.
   * The `current` property on refs is mutable and shared between renders.
   */
  useEffect(() => {
    valueRef.current = value
  }, [value])

  /**
   * Return previous value.
   */
  return valueRef.current
}

export default usePreviousValue
