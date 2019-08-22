import { useRef, useEffect, useReducer, useCallback } from 'react'

/**
 * @typedef {object} State
 * @property {boolean} isLoaded
 * @property {boolean} isLoading
 * @property {boolean} hasFailed
 */

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

/**
 * @returns {State}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        isLoaded: false,
        isLoading: true,
        hasFailed: false,
      }
    }

    case LOADED: {
      return {
        isLoaded: true,
        isLoading: false,
        hasFailed: false,
      }
    }

    case FAILED: {
      return {
        isLoaded: false,
        isLoading: false,
        hasFailed: true,
      }
    }

    default: {
      return state
    }
  }
}

/**
 * Returns the state of an image, given a `src`.
 *
 * @param {string} src - source of the image to load
 * @returns {State}
 */
const useImage = (src) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoaded: false,
    isLoading: src != null,
    hasFailed: !src,
  })

  const imageRef = useRef(new Image())

  const onLoad = () => {
    dispatch({ type: LOADED })
  }

  const onError = () => {
    dispatch({ type: FAILED })
  }

  const loadImage = useCallback(() => {
    if (!src) {
      onError()
    } else {
      if (imageRef.current.complete) {
        onLoad()
      } else {
        dispatch({ type: LOADING })
        imageRef.current.src = src
        imageRef.current.onload = onLoad
        imageRef.current.onerror = onError
      }
    }
  }, [src])

  useEffect(() => {
    const currentRef = imageRef.current

    loadImage()

    return () => {
      if (currentRef) {
        currentRef.onload = () => {}
        currentRef.onerror = () => {}
      }
    }
  }, [loadImage])

  return state
}

export default useImage
