/**
 * Returns a copy of given `array` without falsy values.
 *
 * @param {Array} array - Original array.
 * @returns {Array} - New array without falsy values.
 */
const compact = (array) => array.filter((value) => !!value)

export default compact
