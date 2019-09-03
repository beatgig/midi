import hasFields from './hasFields'

/**
 * Gets the raw value of all the fields in the given array.
 *
 * @param {Array} fields - An array of form fields.
 * @returns {object} - Key-value pairs of field names and their raw values.
 */
const getRawValues = (fields) =>
  hasFields(fields)
    ? fields.reduce(
        (result, field) => ({
          ...result,
          [field.name]: field.rawValue,
        }),
        {},
      )
    : {}

export default getRawValues
