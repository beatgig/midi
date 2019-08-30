import { isFunction } from '@beatgig/is'

/**
 * Returns a function that delays the execution of the given `callback`
 * according to the `delay`.
 *
 * @param {Function} callback - The function to be delayed.
 * @param {number} [delay=0] - The time in milliseconds to delay the given `callback`.
 * @returns {Function} - The debounced `callback` function.
 */
const debounce = (callback, delay = 0) => {
  if (!isFunction(callback)) {
    throw new TypeError('`callback` parameter has to be a valid function.')
  }

  let timerId

  /**
   * Delays the execution of the given `callback` function and returns a
   * function that will cancel delayed invocations.
   *
   * @param {*} args - Arguments to be passed to the `callback` function.
   * @returns {Function} - Function to cancel the execution of the given `callback`.
   */
  const debounced = (...args) => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      callback(...args)
    }, delay)

    return () => clearTimeout(timerId)
  }

  return debounced
}

export default debounce
