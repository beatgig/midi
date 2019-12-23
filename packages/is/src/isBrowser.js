/**
 * Returns true if the current environment is a browser or has support for the DOM.
 *
 * @returns {boolean}
 */
const isBrowser = () =>
  !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  )

export default isBrowser
