/**
 * Returns `true` if the given `value` is a string.
 *
 * @param {*} value
 * @returns {boolean}
 */
const isString = (value) =>
  Object.prototype.toString.call(value) === '[object String]'

export default isString
