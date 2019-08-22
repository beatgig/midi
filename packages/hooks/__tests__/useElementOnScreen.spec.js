import { render } from '@testing-library/react'
import React, { useRef } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'
import { intersectionObserver } from '@shopify/jest-dom-mocks'

import useElementOnScreen from '../src/useElementOnScreen'

describe('useElementOnScreen', () => {
  beforeAll(() => {
    intersectionObserver.mock()
  })

  afterAll(() => {
    intersectionObserver.restore()
  })

  test('returns true when the element is visible', () => {
    const { result: refResult } = renderHook(() => useRef(null))
    render(<div ref={refResult.current} />)
    const { result } = renderHook(() => useElementOnScreen(refResult.current))

    act(() => {
      intersectionObserver.simulate(intersectionObserver.observers[0])
    })

    expect(result.current.entry).toBeTruthy()
    expect(result.current.isVisible).toBeTruthy()
  })

  test('returns false when the element is not visible', () => {
    const { result: refResult } = renderHook(() => useRef(null))
    render(<div ref={refResult.current} />)
    const { result } = renderHook(() => useElementOnScreen(refResult.current))
    expect(result.current.entry).toBeNull()
    expect(result.current.isVisible).toBeFalsy()
  })
})
