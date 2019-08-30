/**
 * Returns all items in an array of objects that match the given `value`.
 *
 * @param {Array} array - An array of objects.
 * @param {string} key - The object `key` you want to perform the search with.
 * @param {string} value - The `value` used to match the objects in the `array`.
 * @returns {Array} - A new array containing the objects that matched the given `value`.
 */
const filterByKey = (array, key, value) => {
  const searchTerm = value
    .trim()
    .toLowerCase()
    .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  const searchRegexp = new RegExp(searchTerm)

  if (value) {
    return array.filter((item) => {
      const itemValue = item[key] ? item[key].toLowerCase() : ''
      return itemValue.startsWith(searchTerm) || searchRegexp.test(itemValue)
    })
  }

  return []
}

export default filterByKey
