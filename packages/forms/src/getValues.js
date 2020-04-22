import { isNil } from '@beatgig/is'

import hasFields from './hasFields'

/**
 * Gets the formatted value of all the fields in the given array.
 *
 * @param {Array} fields - An array of form fields.
 * @returns {object} - Key-value pairs of field names and their formatted values.
 */
const getValues = (fields) =>
  hasFields(fields)
    ? fields.reduce(
        (result, field) =>
          isNil(field)
            ? result
            : {
                ...result,
                [field.name]: field.value,
              },
        {},
      )
    : {}

export default getValues
