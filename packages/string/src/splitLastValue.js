import { last } from '@beatgig/array'

/**
 * Gets the last value in the array returned by splitting
 * the `value` by the given `separator`.
 *
 * @param {string} value - The original string to be splitted.
 * @param {(string|RegExp)} separator - Denotes the points at which each split should occur.
 * @returns {*} - The last value of the array returned by the splitted `value`.
 */
const splitLastValue = (value, separator) => last(value.split(separator))

export default splitLastValue
