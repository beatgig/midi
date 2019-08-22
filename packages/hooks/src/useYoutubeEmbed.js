import { toParams } from '@beatgig/url'
import { splitLastValue } from '@beatgig/string'

import usePlayerEmbed from './usePlayerEmbed'

/**
 * @typedef {object} PlayerEmbedState
 * @property {string} error
 * @property {object} metadata
 * @property {boolean} hasError
 * @property {boolean} isLoading
 * @property {boolean} hasLoaded
 * @property {boolean} hasMetadata
 */

/**
 * @typedef { PlayerEmbedState & { renderEmbed: function }} PlayerEmbedData
 */

/**
 * Returns a metadata from a Youtube embeddable player.
 * @param {object} options
 * @param {string} options.apiKey
 * @param {object} [options.params]
 * @param {function} [options.formatMetadata]
 * @param {string} options.videoUrl
 * @param {boolean} [options.withMetadata]
 * @returns {PlayerEmbedData}
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
  videoUrl,
  withMetadata,
}) => {
  /**
   * @type {string} videoId
   */
  const videoId = splitLastValue(videoUrl, '/')

  return usePlayerEmbed({
    apiUrl: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=statistics,snippet`,
    iframeUrl: `https://www.youtube.com/embed/${videoId}?${toParams(params)}`,
    withMetadata,
    formatMetadata,
  })
}

export default useYoutubeEmbed
