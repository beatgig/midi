/**
 * Returns `true` if the given `value` is a valid email address.
 *
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - A boolean flag that determines if the given `value` is a valid email address.
 */
const isEmail = (value) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  )

export default isEmail
