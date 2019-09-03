import hasFields from './hasFields'

/**
 * Gets the formatted value of all the fields in the given array.
 *
 * @param {Array} fields - An array of form fields.
 * @returns {FormData} - A FormData object based on the field's names and values.
 */
const getFormData = (fields) => {
  const formData = new FormData()

  if (hasFields(fields)) {
    fields.forEach((field) => {
      formData.append(field.name, field.value)
    })
  }

  return formData
}

export default getFormData
