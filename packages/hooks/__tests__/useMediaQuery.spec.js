import { matchMedia } from '@shopify/jest-dom-mocks'
import { renderHook } from '@testing-library/react-hooks'

import useMediaQuery from '../src/useMediaQuery'

describe('useMediaQuery', () => {
  const mediaQuery = '(min-width: 1px)'

  beforeAll(() => {
    matchMedia.setMedia((media) => ({
      media: mediaQuery,
      matches: media === mediaQuery,
    }))
  })

  test('returns true when the media query matches', () => {
    const { result } = renderHook(() => useMediaQuery(mediaQuery))
    expect(result.current).toBeTruthy()
  })
})
