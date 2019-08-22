import { renderHook } from '@testing-library/react-hooks'
import React, { useRef } from 'react'
import { render, fireEvent } from '@testing-library/react'

import useOnClickOutside from '../src/useOnClickOutside'

describe('useOnClickOutside', () => {
  test('calls the callback when clicking outside of the target element', () => {
    const callback = jest.fn()
    const { result: refTarget } = renderHook(() => useRef(null))
    const { result: refOutside } = renderHook(() => useRef(null))

    render(
      <div>
        <div ref={refOutside.current} />
        <div ref={refTarget.current} />
      </div>,
    )

    renderHook(() => {
      useOnClickOutside(refTarget.current, callback)
    })

    fireEvent.mouseDown(refTarget.current.current)
    expect(callback).not.toBeCalled()
    fireEvent.mouseDown(refOutside.current.current)
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('works on mobile and other touch based devices', () => {
    const callback = jest.fn()
    const { result: refTarget } = renderHook(() => useRef(null))
    const { result: refOutside } = renderHook(() => useRef(null))

    render(
      <div>
        <div ref={refOutside.current} />
        <div ref={refTarget.current} />
      </div>,
    )

    renderHook(() => {
      useOnClickOutside(refTarget.current, callback)
    })

    fireEvent.touchStart(refTarget.current.current)
    expect(callback).not.toBeCalled()
    fireEvent.touchStart(refOutside.current.current)
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
