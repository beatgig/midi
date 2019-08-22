import { isFunction } from '@beatgig/is'

/**
 * @typedef {function} DebouncedFunction
 * @property {function} cancel
 */

/**
 * Returns a function that delays the execution of the given `callback`
 * according to the `delay`.
 *
 * @param {function} callback - The function to be delayed.
 * @param {number} [delay=0] - The time in milliseconds to delay the given `callback`.
 * @returns {DebouncedFunction} - The debounced `callback` function.
 */
const debounce = (callback, delay = 0) => {
  if (!isFunction(callback)) {
    throw new TypeError('`callback` parameter has to be a valid function.')
  }

  let timerId

  const debounced = (...args) => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  /**
   * The delayed callback function will have a `cancel` method that to
   * cancel delayed invocations.
   */
  debounced.cancel = () => {
    clearTimeout(timerId)
  }

  return debounced
}

export default debounce
