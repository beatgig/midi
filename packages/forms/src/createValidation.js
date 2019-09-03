/**
 * Creates a function that evaluates a `value` using the given
 * `test` function and returns the given `errorMessage` if the test
 * fails.
 *
 * @param {Function} test - The function used to evaluate the given `value`.
 * @param {string} errorMessage - An error message assigned to the field when the validation fails.
 * @returns {Function} - A function used to validate the field's value.
 */
const createValidation = (test, errorMessage) =>
  /**
   * @param {*} value - The value to be validated.
   * @returns {string|null} - Returns an error message if the validation fails, otherwise it returns null.
   */
  (value) => (!test(value) ? errorMessage : null)

export default createValidation
