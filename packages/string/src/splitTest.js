import { isFunction } from '@beatgig/is'

/**
 * Checks whether the given `test` is true for each value in the array
 * returned by splitting the `value` by the given `separator`.
 *
 * @param {string} value
 * @param {(string|RegExp)} separator
 * @param {(function|RegExp)} test
 * @returns {boolean}
 */
const splitTest = (value, separator, test) =>
  value
    .split(separator)
    .every((element) =>
      isFunction(test) ? test(element) : new RegExp(test).test(element),
    )

export default splitTest
