/**
 * Flattens array a single level deep.
 *
 * @param {array} array=[] - The array to be flatten
 * @returns {array}
 */
const flatten = (array = []) => {
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
