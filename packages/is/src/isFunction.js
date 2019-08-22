/**
 * Returns `true` if the given `value` is a function.
 *
 * @param {*} value
 * @returns {boolean}
 */
const isFunction = (value) =>
  Object.prototype.toString.call(value) === '[object Function]'

export default isFunction
