/**
 * Validates that the given value is an array of form fields.
 *
 * @param {Array} fields - An array of form fields.
 * @returns {boolean} - A boolean flag that determines if the given `value` is an array of form fields.
 */
const hasFields = (fields) => Array.isArray(fields) && fields.length !== 0

export default hasFields
