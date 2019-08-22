/**
 * Returns `true` if the given `value` is an object.
 *
 * @param {*} value
 * @returns {boolean}
 */
const isObject = (value) =>
  Object.prototype.toString.call(value) === '[object Object]'

export default isObject
