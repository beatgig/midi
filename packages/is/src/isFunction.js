/**
 * Returns `true` if the given `value` is a function.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is a function.
 */
const isFunction = (value) =>
  Object.prototype.toString.call(value) === '[object Function]'

export default isFunction
