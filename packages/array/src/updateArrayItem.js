/**
 * Updates an array's item immutably, returning a new array with the updated
 * item in place.
 *
 * @param {array} array=[] - The original array with the item to update
 * @param {number} index=0 - The index of the item to be updated
 * @param {*} item - The updated item
 * @returns {array}
 *
 * @see {@link https://link.medium.com/eLiy5TjahU|Immutably setting a value in a JS array}
 */
const updateArrayItem = (array = [], index = 0, item) =>
  Object.assign([...array], { [index]: item })

export default updateArrayItem
