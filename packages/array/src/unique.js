/**
 * Returns the a copy given `array` without repeated values.
 *
 * @param {Array} array - The original array which may contain repeated values.
 * @returns {Array} - The new array without repeated values.
 */
const unique = (array) => [...new Set(array)]

export default unique
