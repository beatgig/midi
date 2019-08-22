import { isEmptyObject } from '@beatgig/is'
import React, { useReducer, useEffect } from 'react'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const LOADING = 'LOADING'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const LOADED = 'LOADED'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const FAILED = 'FAILED'

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        error: null,
        metadata: {},
        hasError: false,
        isLoading: true,
        hasLoaded: false,
        hasMetadata: false,
      }
    }

    case LOADED: {
      return {
        error: null,
        metadata: action.metadata,
        hasError: false,
        isLoading: false,
        hasLoaded: true,
        hasMetadata: !isEmptyObject(action.metadata),
      }
    }

    case FAILED: {
      return {
        error: action.error,
        metadata: {},
        hasError: true,
        isLoading: false,
        hasLoaded: false,
        hasMetadata: false,
      }
    }

    default: {
      return state
    }
  }
}

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
 * Returns metadata and a render method for loading and rendering
 * embeddable players.
 *
 * @param {object} options
 * @param {string} [options.apiUrl] - API url used to fetch metadata if `options.withMetadata` is `true`
 * @param {string} options.iframeUrl - The url used as the iframe's src attribute
 * @param {boolean} [options.withMetadata] - Flag to determine whether or not to fetch for more data
 * @param {function} [options.formatMetadata] - Function used to format the metadata
 * @returns {PlayerEmbedData}
 */
const usePlayerEmbed = ({
  apiUrl,
  iframeUrl,
  withMetadata = false,
  formatMetadata = (metadata) => metadata,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    metadata: {},
    isLoading: withMetadata,
  })

  /**
   * Fetch metadata if the `withMetadata` flag is `true`.
   */
  useEffect(() => {
    if (withMetadata) {
      dispatch({ type: LOADING })

      fetch(apiUrl)
        .then((response) => response.json())
        .then(({ data: metadata, status, statusText: error }) => {
          if (status === 200) {
            dispatch({
              type: LOADED,
              metadata: formatMetadata(metadata),
            })
          } else {
            dispatch({ type: FAILED, error })
          }
        })
        .catch((error) => {
          dispatch({ type: FAILED, error })
        })
    }
  }, [apiUrl, formatMetadata, withMetadata])

  return {
    /**
     * @type {PlayerEmbedState}
     */
    ...state,
    /**
     * @params {object} iframeProps - Properties to pass on to the iframe element
     * @returns {React.ReactElement}
     */
    renderEmbed: (iframeProps) => (
      <iframe
        {...iframeProps}
        src={iframeUrl}
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
      />
    ),
  }
}

export default usePlayerEmbed
