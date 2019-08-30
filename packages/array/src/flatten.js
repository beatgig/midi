/**
 * Flattens array a single level deep.
 *
 * @param {Array} array - The original array to be flatten.
 * @returns {Array} - The new flattened array.
 */
const flatten = (array) => {
  const recursiveFlatten = (currentArray) =>
    currentArray.reduce(
      (flattenArray, value) =>
        flattenArray.concat(
          Array.isArray(value) ? recursiveFlatten(value) : value,
        ),
      [],
    )

  return recursiveFlatten(array)
}

export default flatten
