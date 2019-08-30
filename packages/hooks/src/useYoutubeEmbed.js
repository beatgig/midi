import { toParams } from '@beatgig/url'
import { splitLastValue } from '@beatgig/string'

import usePlayerEmbed from './usePlayerEmbed'

/**
 * @typedef {object} PlayerEmbed
 * @property {string} error
 * @property {object} metadata
 * @property {boolean} hasError
 * @property {boolean} isLoading
 * @property {boolean} hasLoaded
 * @property {boolean} hasMetadata
 * @property {Function} renderEmbed
 */

/**
 * Returns a metadata from a Youtube embeddable player.
 *
 * @param {object} options - Options used to create parameters to pass to `usePlayerEmbed`.
 * @param {string} options.apiKey - A valid SoundCloud API key.
 * @param {object} [options.params] - Query parameters to be passed to the SoundCloud embed url.
 * @param {Function} [options.formatMetadata] - Function used to format the data returned from the SoundCloud API.
 * @param {string} options.url - The url of the video to be embedded.
 * @param {boolean} [options.withMetadata] - Boolean flag to determine if metadata should be fetched.
 * @returns {PlayerEmbed} - The state of the embeddable player.
 */
const useYoutubeEmbed = ({
  apiKey,
  params = {
    rel: 0,
    color: 'white',
    autoplay: 0,
    showinfo: 0,
    controls: 1,
  },
  formatMetadata,
  url,
  withMetadata,
}) => {
  /**
   * @type {string} videoId
   */
  const videoId = splitLastValue(url, '/')

  return usePlayerEmbed({
    apiUrl: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=statistics,snippet`,
    iframeUrl: `https://www.youtube.com/embed/${videoId}?${toParams(params)}`,
    withMetadata,
    formatMetadata,
  })
}

export default useYoutubeEmbed
