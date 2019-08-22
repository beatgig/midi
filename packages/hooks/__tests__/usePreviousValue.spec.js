import { useState } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import usePreviousValue from '../src/usePreviousValue'

describe('usePreviousValue', () => {
  test('keeps the previous value', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(1)
      const previousValue = usePreviousValue(value)
      return { value, setValue, previousValue }
    })

    expect(result.current.value).toEqual(1)
    expect(result.current.previousValue).toEqual(undefined)
    act(() => result.current.setValue(2))
    expect(result.current.value).toEqual(2)
    expect(result.current.previousValue).toEqual(1)
    act(() => result.current.setValue(3))
    expect(result.current.value).toEqual(3)
    expect(result.current.previousValue).toEqual(2)
  })
})
