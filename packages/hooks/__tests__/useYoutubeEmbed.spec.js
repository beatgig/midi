import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import useYoutubeEmbed from '../src/useYoutubeEmbed'

describe('useYoutubeEmbed', () => {
  test('returns a render function to render an iframe', () => {
    const videoUrl = 'some/video/url'
    const { result } = renderHook(() => useYoutubeEmbed({ videoUrl }))
    const { container } = render(result.current.renderEmbed())
    const iframe = container.querySelector('iframe')

    expect(iframe).toBeDefined()
    expect(iframe.getAttribute('src')).toEqual(
      'https://www.youtube.com/embed/url?rel%3D0&color%3Dwhite&autoplay%3D0&showinfo%3D0&controls%3D1',
    )
  })
})
