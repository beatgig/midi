import isNil from './isNil'

/**
 * Validates that the given value a valid date.
 *
 * @param {*} value
 * @return {boolean} - Returns true if the value is a valid date, e.g., `"2/1/1999"`.
 */
const isDate = (value) => {
  const date = new Date(value)

  return (
    !isNil(value) &&
    !isNil(date) &&
    date instanceof Date &&
    date.toString() !== 'Invalid Date'
  )
}

export default isDate
