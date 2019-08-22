/**
 * Transforms the given `value` as an array if it's not one.
 *
 * @param {*} value
 * @returns {array}
 */
const toArray = (value) => (Array.isArray(value) ? value : [value])

export default toArray
