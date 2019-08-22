import { toParams } from '@beatgig/url'
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
const useSoundCloudEmbed = ({
  apiKey,
  params = {
    color: '',
    buying: false,
    liking: false,
    visual: true,
    sharing: false,
    download: false,
    callback: true,
    auto_play: false,
    show_user: false,
    start_track: false,
    show_teaser: false,
    hide_related: false,
    show_artwork: false,
    show_comments: false,
    show_playcount: true,
  },
  formatMetadata = (metadata) => metadata,
  videoUrl,
  withMetadata,
}) => {
  return usePlayerEmbed({
    apiUrl: `${videoUrl}?client_id=${apiKey}`,
    iframeUrl: `https://w.soundcloud.com/player/?url=${videoUrl}&${toParams(
      params,
    )}`,
    withMetadata,
    formatMetadata,
  })
}

export default useSoundCloudEmbed
