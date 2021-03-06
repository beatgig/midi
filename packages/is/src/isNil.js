/**
 * Checks whether the given value is `null` or `undefined`.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is null or undefined.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3}
 */
const isNil = (value) => value == null

export default isNil
