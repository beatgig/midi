import isEqual from 'lodash.isequal'

import toParamsObject from './toParamsObject'

/**
 * Will return true if the given parameter strings have the same keys and
 * values.
 *
 * @param {string} params - Original query parameters to be compared.
 * @param {string} otherParams - The other set of query parameters to be compared against the original `params`.
 * @returns {boolean} - A boolean flag that determines whether or not the query parameters are equal.
 */
const paramsAreEqual = (params, otherParams) =>
  isEqual(toParamsObject(params), toParamsObject(otherParams))

export default paramsAreEqual
