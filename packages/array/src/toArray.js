/**
 * Transforms the given `value` to an array if it's not one.
 *
 * @param {*} value - The value you want returned as an array.
 * @returns {Array} - The new array containing the given `value`.
 */
const toArray = (value) => (Array.isArray(value) ? value : [value])

export default toArray
