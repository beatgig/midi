import { isNumeric } from '@beatgig/is'

/**
 * Transforms a string of query parameters into a plain object.
 *
 * @param {string} params=''
 * @param {function} [format] - Optional function to format values
 * @returns {object}
 */
const toParamsObject = (params = '', format = (value) => value) =>
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
