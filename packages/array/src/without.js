/**
 * Removes the given values from the array.
 *
 * @param {Array} array - The original array with the item to update.
 * @param {*} args - The items to remove.
 * @returns {Array} - The new array containing the updates value.
 */
const without = (array, ...args) =>
  array.filter((element) => !args.includes(element))

export default without
