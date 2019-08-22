/**
 * Returns the last value of the given `array`.
 *
 * @param {array} array=[]
 * @returns {*}
 */
const last = (array = []) =>
  Array.isArray(array) ? array[array.length - 1] : array

export default last
