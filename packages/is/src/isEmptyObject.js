import isObject from './isObject'

/**
 * Returns `true` if the given `object` is empty.
 *
 * @param {*} object
 * @returns {boolean}
 */
const isEmptyObject = (object) =>
  isObject(object) && !Object.keys(object).length

export default isEmptyObject
