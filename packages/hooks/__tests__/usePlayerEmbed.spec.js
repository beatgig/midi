import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import usePlayerEmbed from '../src/usePlayerEmbed'

describe('usePlayerEmbed', () => {
  test('returns a render function to render an iframe', () => {
    const title = 'iframe title'
    const iframeUrl = 'some/iframe/url'
    const { result } = renderHook(() => usePlayerEmbed({ iframeUrl }))
    const { container } = render(result.current.renderEmbed({ title }))
    const iframe = container.querySelector('iframe')

    expect(iframe).toBeDefined()
    expect(iframe.getAttribute('src')).toEqual(iframeUrl)
    expect(iframe.getAttribute('title')).toEqual(title)
  })
})
