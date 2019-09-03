import hasFields from './hasFields'

/**
 * Returns `true` if all of the fields from the given array are valid.
 *
 * @param {Array} fields - An array of form fields.
 * @returns {boolean} - A boolean flag that determines whether all the fields in the array are valid.
 */
const areValid = (fields) =>
  hasFields(fields) && fields.every((field) => field.isValid)

export default areValid
