import { isFunction, isString } from '@beatgig/is'

/**
 * Checks whether the given `test` is true for each value in the array
 * returned by splitting the `value` by the given `separator`.
 *
 * @param {string} value - The original string to be splitted and tested.
 * @param {(string|RegExp)} separator - Denotes the points at which each split should occur.
 * @param {Function|string|RegExp} test - The function or RegExp to be used to test the given `value`.
 * @returns {boolean} - A boolean flag that determines whether or not the given `value` passes the `test`.
 */
const splitTest = (value, separator, test) =>
  value.split(separator).every((element) => {
    if (isFunction(test)) {
      return /** @type {Function} */ test(element)
    } else if (isString(test)) {
      return /** @type {string} */ new RegExp(test).test(element)
    } else {
      return /** @type {RegExp} */ test.test(element)
    }
  })

export default splitTest
