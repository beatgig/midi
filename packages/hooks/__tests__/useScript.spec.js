import { act, renderHook } from '@testing-library/react-hooks'

import useScript from '../src/useScript'

describe('useScript', () => {
  const originalScript = window.HTMLScriptElement
  const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC'
  const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC'

  beforeAll(() => {
    jest.useFakeTimers()

    Object.defineProperty(window.HTMLScriptElement.prototype, 'src', {
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
    window.HTMLScriptElement = originalScript
  })

  test('injects a script into the `document`', () => {
    renderHook(() => {
      const [hasLoaded, hasFailed] = useScript('some/script.js')
      return { hasLoaded, hasFailed }
    })

    expect(document.querySelector('script')).toBeDefined()
  })

  test('returns a `hasFailed` flag with `true` if the script fails to load', () => {
    const { result } = renderHook(() => {
      const [hasLoaded, hasFailed] = useScript(LOAD_FAILURE_SRC)
      return { hasLoaded, hasFailed }
    })

    expect(result.current.hasFailed).toBeFalsy()
    act(() => jest.advanceTimersByTime(1000))
    expect(result.current.hasLoaded).toBeFalsy()
    expect(result.current.hasFailed).toBeTruthy()
  })

  test('returns a `hasLoaded` flag with `true` if the script loads', () => {
    const { result } = renderHook(() => {
      const [hasLoaded, hasFailed] = useScript(LOAD_SUCCESS_SRC)
      return { hasLoaded, hasFailed }
    })

    expect(result.current.hasLoaded).toBeFalsy()
    act(() => jest.advanceTimersByTime(1000))
    expect(result.current.hasLoaded).toBeTruthy()
    expect(result.current.hasFailed).toBeFalsy()
  })
})
