import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import useSoundCloudEmbed from '../src/useSoundCloudEmbed'

describe('useSoundCloudEmbed', () => {
  test('returns a render function to render an iframe', () => {
    const videoUrl = 'some/video/url'
    const { result } = renderHook(() => useSoundCloudEmbed({ videoUrl }))
    const { container } = render(result.current.renderEmbed())
    const iframe = container.querySelector('iframe')

    expect(iframe).toBeDefined()
    expect(iframe.getAttribute('src')).toEqual(
      'https://w.soundcloud.com/player/?url=some/video/url&color%3D&buying%3Dfalse&liking%3Dfalse&visual%3Dtrue&sharing%3Dfalse&download%3Dfalse&callback%3Dtrue&auto_play%3Dfalse&show_user%3Dfalse&start_track%3Dfalse&show_teaser%3Dfalse&hide_related%3Dfalse&show_artwork%3Dfalse&show_comments%3Dfalse&show_playcount%3Dtrue',
    )
  })
})
