/**
 * Returns `true` if the given `value` is a string.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is a string.
 */
const isString = (value) =>
  Object.prototype.toString.call(value) === '[object String]'

export default isString
