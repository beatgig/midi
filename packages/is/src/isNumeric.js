/**
 * Validates that the given value is numeric
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - Returns true if the value is numeric (e.g. "2", 70.1).
 */
const isNumeric = (value) => !Number.isNaN(value - Number.parseFloat(value))

export default isNumeric
