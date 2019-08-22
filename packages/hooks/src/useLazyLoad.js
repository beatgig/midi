import { useState, useEffect } from 'react'

import useElementOnScreen from './useElementOnScreen'

/**
 * Lazy loads the given element (tracked by `ref`) when it's
 * visible on the viewport.
 *
 * @param {object} ref - A React `ref` pointing to the element to lazy load.
 * @param {object} [options] - `IntersectionObserver` options
 * @returns {boolean}
 */
const useLazyLoad = (ref, options = { rootMargin: '50% 0px 0px 0px' }) => {
  if (!ref || !ref.hasOwnProperty('current')) {
    throw new TypeError('`ref` parameter has to be a valid React ref.')
  }

  const { isVisible } = useElementOnScreen(ref, options)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setLoaded(true)
    }
  }, [isVisible, setLoaded])

  return isLoaded
}

export default useLazyLoad
