/**
 * @param {string} value The value to be evaluated
 * @returns {boolean} Returns true if the value's length is greater than 8
 *
 * @description
 * Checks whether the given value has is at least 8 characters long
 */
export const isPasswordLength = (value) => value && value.length >= 8
