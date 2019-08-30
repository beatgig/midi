import isObject from './isObject'

/**
 * Returns `true` if the given `object` is empty.
 *
 * @param {*} object - The object to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is an empty object.
 */
const isEmptyObject = (object) =>
  isObject(object) && !Object.keys(object).length

export default isEmptyObject
