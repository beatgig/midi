import { debounce } from '@beatgig/function'
import { useState, useEffect } from 'react'

/**
 * Returns the given `value` after the `delay`.
 *
 * @param {*} value - The value that will be returned with the given `delay`.
 * @param {number} [delay=0] - The number of milliseconds to `delay` the `value`.
 * @returns {*} debouncedValue - The delayed value.
 */
const useDebouncedValue = (value, delay = 0) => {
  const [debouncedValue, setDebouncedValue] = useState()

  useEffect(() => {
    const debounced = debounce((value) => {
      setDebouncedValue(value)
    }, delay)

    /**
     * Delay setting the value on to `debouncedValue` after the given `delay`.
     */
    const cancel = debounced(value)

    return () => {
      cancel()
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebouncedValue
