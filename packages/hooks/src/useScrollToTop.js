import { useEffect } from 'react'

import usePreviousValue from './usePreviousValue'

/**
 * Scrolls window to the top whenever the given `location` pathname changes.
 *
 * @param {object} location - A valid location object.
 */
const useScrollToTop = (location) => {
  const previousPathName = usePreviousValue(location.pathname)

  useEffect(() => {
    if (previousPathName && previousPathName !== location.pathname) {
      window.scrollTo(0, 0)
    }
  }, [previousPathName, location.pathname])
}

export default useScrollToTop
