import { useEffect, useRef, useState } from 'react'

/**
 * @typedef {object} State
 * @property {object} entry
 * @property {boolean} isVisible
 */

/**
 * Detects when the given element (tracked by `ref`) is visible on the viewport.
 *
 * @param {import('react').RefObject} ref - A React ref pointing to the DOM element to track.
 * @param {object} [options] - `IntersectionObserver` options.
 * @returns {State} - Object containing an `isVisible` flag and the `entry` returned from the `IntersectionObserver` instance.
 */
const useElementOnScreen = (ref, options = {}) => {
  if (!ref || !ref.hasOwnProperty('current')) {
    throw new TypeError('`ref` parameter has to be a valid React ref.')
  }

  const observerRef = useRef(null)

  const { root, threshold, rootMargin } = Object.assign(
    {
      root: null,
      threshold: 0.0,
      rootMargin: '0px',
    },
    options,
  )

  /**
   * Tracks whether the element is visible or not.
   */
  const [state, setState] = useState({
    entry: null,
    isVisible: false,
  })

  useEffect(() => {
    /**
     * Use `IntersectionObserver` to detect when the `element` is either
     * visible or close to being visible on the viewport depending on
     * the `rootMargin` option.
     */
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setState({
          entry,
          isVisible: entry.isIntersecting,
        })
      },
      {
        root,
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observerRef.current.observe(ref.current)
    }
  }, [ref, root, rootMargin, threshold])

  useEffect(() => {
    const element = ref.current
    const observer = observerRef.current

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  })

  return state
}

export default useElementOnScreen
