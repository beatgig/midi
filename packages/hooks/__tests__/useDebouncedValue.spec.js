import { useState } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import useDebouncedValue from '../src/useDebouncedValue'

describe('useDebouncedValue', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.clearAllTimers()
  })

  test('keeps the previous value', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(1)
      const debouncedValue = useDebouncedValue(value, 500)
      return { value, setValue, debouncedValue }
    })

    expect(result.current.value).toEqual(1)
    expect(result.current.debouncedValue).toEqual(undefined)
    act(() => jest.advanceTimersByTime(500))
    expect(result.current.debouncedValue).toEqual(1)
    act(() => result.current.setValue(2))
    expect(result.current.value).toEqual(2)
    expect(result.current.debouncedValue).toEqual(1)
    act(() => jest.advanceTimersByTime(100))
    expect(result.current.debouncedValue).toEqual(1)
    act(() => jest.advanceTimersByTime(500))
    expect(result.current.debouncedValue).toEqual(2)
  })
})
