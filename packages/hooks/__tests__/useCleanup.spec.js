import { renderHook } from '@testing-library/react-hooks'

import useCleanup from '../src/useCleanup'

describe('useCleanup', () => {
  test('calls the given callback when the component unmounts', () => {
    const callback = jest.fn()

    const { unmount } = renderHook(() => {
      useCleanup(callback)
    })

    expect(callback).not.toBeCalled()
    unmount()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('calls the given callbacks when the component unmounts', () => {
    const callbacks = [jest.fn(), jest.fn(), jest.fn()]

    const { unmount } = renderHook(() => {
      useCleanup(callbacks)
    })

    expect(callbacks[0]).not.toBeCalled()
    expect(callbacks[1]).not.toBeCalled()
    expect(callbacks[2]).not.toBeCalled()
    unmount()
    expect(callbacks[0]).toHaveBeenCalledTimes(1)
    expect(callbacks[1]).toHaveBeenCalledTimes(1)
    expect(callbacks[2]).toHaveBeenCalledTimes(1)
  })
})
