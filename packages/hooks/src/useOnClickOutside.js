import { toArray } from '@beatgig/array'
import { isElement } from '@beatgig/is'
import { useEffect } from 'react'

/**
 * Executes the given `callback` when clicking  outside of the element tracked
 * by the given `ref`, or any of the elements on `otherTargets`.
 *
 * @param {import('react').RefObject} ref - A React `ref` pointing to the element.
 * @param {Function} callback - Callback function executed when clicking outside.
 * @param {object[]} otherTargets - Array of other React `refs` pointing elements.
 */
const useOnClickOutside = (ref, callback, otherTargets = []) => {
  if (!ref || !ref.hasOwnProperty('current')) {
    throw new TypeError('`ref` parameter has to be a valid React ref.')
  }

  useEffect(() => {
    const otherTargetsArray = toArray(otherTargets).map(
      (target) => target.current || target,
    )

    const eventListener = (event) => {
      /**
       * The `callback` callback function will be invoked tf the `target`
       * of the click:
       *
       * - Is not the element assigned to `ref.current`.
       * - Doesn't contain the element assigned to `ref.current`.
       * - Is not any of the elements in the `otherTargets` array.
       * - Is not contained by any of the elements in the `otherTargets` array.
       */
      if (
        ref.current &&
        ref.current !== event.target &&
        !ref.current.contains(event.target) &&
        !otherTargetsArray.includes(event.target) &&
        !otherTargetsArray.some((otherTarget) => {
          if (isElement(otherTarget)) {
            return otherTarget.contains(event.target)
          }

          return false
        })
      ) {
        callback(event)
      }
    }

    document.addEventListener('mousedown', eventListener)
    document.addEventListener('touchstart', eventListener)

    return () => {
      document.removeEventListener('mousedown', eventListener)
      document.removeEventListener('touchstart', eventListener)
    }
  }, [ref, callback, otherTargets])
}

export default useOnClickOutside
