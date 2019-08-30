import { compact } from '@beatgig/array'
import { isObject } from '@beatgig/is'

/**
 * Transforms the given plain `object` into a string of query parameters.
 *
 * @param {object} object - The object to be transformed into query parameters.
 * @returns {string} - A query parameter string based on the given `object`.
 */
const toParams = (object) =>
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
