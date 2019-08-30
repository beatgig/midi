/**
 * Returns the last value of the given `array`.
 *
 * @param {Array} array - The array from which you want to get the first value.
 * @returns {*} - The first value from the given `array`.
 */
const last = (array) => (Array.isArray(array) ? array[array.length - 1] : array)

export default last
