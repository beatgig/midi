/**
 * Returns a copy of given `array` without falsy values.
 *
 * @param {array} array=[]
 * @returns {array}
 */
const compact = (array = []) => array.filter((value) => !!value)

export default compact
