/**
 * Returns `true` if the given `value` is a DOM element.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is a valid DOM element.
 */
const isElement = (value) => value instanceof HTMLElement

export default isElement
