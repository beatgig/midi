import { useState } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import useFlashContent from '../src/useFlashContent'

describe('useFlashContent', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.clearAllTimers()
  })

  test('returns a boolean that resets on the given `timeVisible`', () => {
    const { result } = renderHook(() => {
      const [isLoading, setLoadingState] = useState(true)

      const showFlashMessage = useFlashContent({
        timeVisible: 500,
        shouldFlashNext: isLoading,
      })

      return { isLoading, setLoadingState, showFlashMessage }
    })

    expect(result.current.isLoading).toEqual(true)
    expect(result.current.showFlashMessage).toEqual(false)
    act(() => result.current.setLoadingState(false))
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.showFlashMessage).toEqual(true)
    act(() => jest.advanceTimersByTime(500))
  })
})
