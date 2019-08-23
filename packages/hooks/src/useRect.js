import { isElement } from '@beatgig/is'
import { useLayoutEffect, useState } from 'react'

/**
 * Returns the DOMRect object from the given element.
 *
 * @param {object} ref - A React `ref` pointing to the element.
 * @returns {object}
 */
const useRect = (ref) => {
  if (!ref || !ref.hasOwnProperty('current')) {
    throw new TypeError('`ref` parameter has to be a valid React ref.')
  }

  if (ref.current && !isElement(ref.current)) {
    throw new TypeError('`ref.current` value has to be a valid DOM element.')
  }

  const [rect, setRect] = useState({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    bottom: 0,
  })

  useLayoutEffect(() => {
    if (ref.current) {
      const currentRect = ref.current.getBoundingClientRect()

      setRect((prevRect) => ({
        x: currentRect.x || prevRect.x,
        y: currentRect.y || prevRect.y,
        top: currentRect.top || prevRect.top,
        left: currentRect.left || prevRect.left,
        right: currentRect.right || prevRect.right,
        width: currentRect.width || prevRect.width,
        height: currentRect.height || prevRect.height,
        bottom: currentRect.bottom || prevRect.bottom,
      }))
    }
  }, [ref])

  return rect
}

export default useRect
