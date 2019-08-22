import { last } from '@beatgig/array'

/**
 * Gets the last value in the array returned by splitting
 * the `value` by the given `separator`.
 *
 * @param {string} value
 * @param {(string|RegExp)} separator
 * @returns {*}
 */
const splitLastValue = (value, separator) => last(value.split(separator))

export default splitLastValue
