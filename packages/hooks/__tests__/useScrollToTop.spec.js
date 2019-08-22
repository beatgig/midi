import { useState } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import useScrollToTop from '../src/useScrollToTop'

describe('useScrollToTop', () => {
  afterAll(() => {
    jest.restoreAllMocks()
  })

  test('scrolls the window to the top when the given location changes', () => {
    Object.defineProperty(window, 'scrollTo', { configurable: true })
    window.scrollTo = jest.fn()

    const { result } = renderHook(() => {
      const [location, setLocation] = useState({ pathname: '/' })
      useScrollToTop(location)
      return { location, setLocation }
    })

    expect(window.scrollTo).not.toBeCalled()
    act(() => result.current.setLocation({ pathname: '/other' }))
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
    act(() => result.current.setLocation({ pathname: '/other' }))
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
    act(() => result.current.setLocation({ pathname: '/others' }))
    expect(window.scrollTo).toHaveBeenCalledTimes(2)
    window.scrollTo.mockRestore()
  })
})
