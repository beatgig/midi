import { compact } from '@beatgig/array'
import { isObject } from '@beatgig/is'

/**
 * Transforms the given plain `object` into a string of query parameters.
 *
 * @param {object} object={}
 * @returns {string}
 */
const toParams = (object = {}) =>
  compact(
    Object.entries(object).map(([key, value]) => {
      const valueIsArray = Array.isArray(value)

      if ((valueIsArray || isObject(value)) && !value) {
        return ''
      }

      return `${encodeURIComponent(
        valueIsArray ? `${key}${!key.endsWith('[]') ? '[]' : ''}=` : `${key}=`,
      )}${
        valueIsArray
          ? encodeURIComponent(
              value.join(`&${key}${!key.endsWith('[]') ? '[]' : ''}=`),
            )
          : encodeURIComponent(value)
      }`
    }),
  ).join('&')

export default toParams
