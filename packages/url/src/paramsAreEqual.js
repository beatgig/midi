import isEqual from 'lodash.isequal'

import toParamsObject from './toParamsObject'

/**
 * Will return true if the given parameter strings have the same keys and
 * values.
 *
 * @param {string} [params='']
 * @param {string} [otherParams='']
 * @returns {boolean}
 */
const paramsAreEqual = (params = '', otherParams = '') =>
  isEqual(toParamsObject(params), toParamsObject(otherParams))

export default paramsAreEqual
