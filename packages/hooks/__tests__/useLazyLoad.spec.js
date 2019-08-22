import { render } from '@testing-library/react'
import React, { useRef } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'
import { intersectionObserver } from '@shopify/jest-dom-mocks'

import useLazyLoad from '../src/useLazyLoad'

describe('useLazyLoad', () => {
  beforeAll(() => {
    intersectionObserver.mock()
  })

  afterAll(() => {
    intersectionObserver.restore()
  })

  test('returns true when the element is lazy loaded', () => {
    const { result: refResult } = renderHook(() => useRef(null))

    render(<div ref={refResult.current} />)

    const { result } = renderHook(() => useLazyLoad(refResult.current))

    expect(result.current).toBeFalsy()

    act(() => {
      intersectionObserver.simulate(intersectionObserver.observers[0])
    })

    expect(result.current).toBeTruthy()
  })
})
