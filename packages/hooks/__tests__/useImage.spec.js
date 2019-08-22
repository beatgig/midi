import { act, renderHook } from '@testing-library/react-hooks'

import useImage from '../src/useImage'

describe('useImage', () => {
  const originalImage = window.Image
  const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC'
  const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC'

  beforeAll(() => {
    jest.useFakeTimers()

    Object.defineProperty(window.Image.prototype, 'src', {
      set(src) {
        if (src === LOAD_FAILURE_SRC) {
          setTimeout(() => {
            this.onerror(new Error())
          }, 1000)
        } else if (src === LOAD_SUCCESS_SRC) {
          setTimeout(() => {
            this.onload()
          }, 1000)
        }
      },
    })
  })

  afterAll(() => {
    jest.clearAllTimers()
    window.Image = originalImage
  })

  test('loads an image', () => {
    const { result } = renderHook(() => useImage(LOAD_SUCCESS_SRC))

    expect(result.current.isLoading).toBeTruthy()
    act(() => jest.advanceTimersByTime(1000))
    expect(result.current.isLoaded).toBeTruthy()
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.hasFailed).toBeFalsy()
  })

  test('returns a `hasFailed` flag with `true` if the image fails to load', () => {
    const { result } = renderHook(() => useImage(LOAD_FAILURE_SRC))

    expect(result.current.isLoading).toBeTruthy()
    act(() => jest.advanceTimersByTime(1000))
    expect(result.current.isLoaded).toBeFalsy()
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.hasFailed).toBeTruthy()
  })
})
