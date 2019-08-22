import { useState, useEffect, useCallback } from 'react'

/**
 * Returns `true` if the given `mediaQuery` is active.
 *
 * @param {string} mediaQuery - The media query string to evaluate
 * @returns {boolean}
 */
const useMediaQuery = (mediaQuery = '') => {
  const mediaQueryList = window.matchMedia(mediaQuery)
  const [isActive, setActiveState] = useState(mediaQueryList.matches)

  const onChange = useCallback(
    (event) => {
      setActiveState(event.matches)
    },
    [setActiveState],
  )

  mediaQueryList.addListener(onChange)

  useEffect(
    () => () => {
      mediaQueryList.removeListener(onChange)
    },
    [onChange, mediaQueryList],
  )

  return isActive
}

export default useMediaQuery
