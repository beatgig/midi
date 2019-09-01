import { renderHook } from '@testing-library/react-hooks'
import React, { useRef } from 'react'
import { render, fireEvent } from '@testing-library/react'

import useRect from '../src/useRect'

describe('useRect', () => {
  const original = Element.prototype.getBoundingClientRect
  const originalDOMRect = global.DOMRect

  test("returns the element's DOMRect object", () => {
    global.DOMRect = jest.fn(() => ({
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      bottom: 0,
    }))

    const { result: elementRef } = renderHook(() => useRef(null))

    render(<div ref={elementRef.current} />)

    const { result: elementRect } = renderHook(() =>
      useRect(elementRef.current),
    )

    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      x: 0,
      y: 0,
      top: 1,
      left: 1,
      right: 0,
      width: 100,
      height: 100,
      bottom: 0,
    }))

    const { result: otherElementRect } = renderHook(() =>
      useRect(elementRef.current),
    )

    expect(otherElementRect.current).toEqual({
      x: 0,
      y: 0,
      top: 1,
      left: 1,
      right: 0,
      width: 100,
      height: 100,
      bottom: 0,
    })

    global.DOMRect = originalDOMRect
    Element.prototype.getBoundingClientRect = original
  })
})
