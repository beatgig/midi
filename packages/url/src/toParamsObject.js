import { isNumeric } from '@beatgig/is'

/**
 * Transforms a string of query parameters into a plain object.
 *
 * @param {string} params - Original query parameters to be transformed into an object.
 * @param {Function} [format] - Optional function to format the values from the query parameters.
 * @returns {object} - An object based on the given `params`.
 */
const toParamsObject = (params, format = (value) => value) =>
  params
    ? decodeURIComponent(params)
        .replace(/^\?/, '')
        .split('&')
        .reduce((paramsObject, param) => {
          const [key, value] = param.split('=')
          const cleanKey = key.replace('[]', '')

          const formattedValue = format(
            isNumeric(value) ? Number.parseFloat(value) : value,
          )

          return {
            ...paramsObject,
            [cleanKey]: key.endsWith('[]')
              ? paramsObject[cleanKey]
                ? paramsObject[cleanKey].concat(formattedValue)
                : [formattedValue]
              : formattedValue,
          }
        }, {})
    : {}

export default toParamsObject
