/**
 * Returns `true` if the given `value` is an object.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is an object.
 */
const isObject = (value) =>
  Object.prototype.toString.call(value) === '[object Object]'

export default isObject
