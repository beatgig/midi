import { isElement } from '@beatgig/is'
import { useLayoutEffect, useState } from 'react'

/**
 * Returns the DOMRect object from the given element.
 *
 * @param {import('react').RefObject} ref - A React `ref` pointing to the element.
 * @returns {DOMRect} - The element's DOMRect object.
 */
const useRect = (ref) => {
  if (!ref || !ref.hasOwnProperty('current')) {
    throw new TypeError('`ref` parameter has to be a valid React ref.')
  }

  if (ref.current && !isElement(ref.current)) {
    throw new TypeError('`ref.current` value has to be a valid DOM element.')
  }

  const [rect, setRect] = useState(new DOMRect())

  useLayoutEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [ref])

  return rect
}

export default useRect
