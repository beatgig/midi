import { toParams } from '@beatgig/url'
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
 * @param {string} options.url - The url of the song or playlist to be embedded.
 * @param {boolean} [options.withMetadata] - Boolean flag to determine if metadata should be fetched.
 * @returns {PlayerEmbed} - The state of the embeddable player.
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
  url,
  withMetadata,
}) => {
  return usePlayerEmbed({
    apiUrl: `${url}?client_id=${apiKey}`,
    iframeUrl: `https://w.soundcloud.com/player/?url=${url}&${toParams(
      params,
    )}`,
    withMetadata,
    formatMetadata,
  })
}

export default useSoundCloudEmbed
