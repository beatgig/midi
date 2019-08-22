/**
 * Returns the a copy given `array` without repeated values.
 *
 * @param {array} array=[]
 * @returns {array}
 */
const unique = (array = []) => [...new Set(array)]

export default unique
