import { useState, useEffect } from 'react'

const loadedScripts = []

/**
 * Injects a script tag with the given `src`.
 *
 * @param {string} src - The source url of the script to be loaded.
 * @returns {boolean[]} - Two boolean flags to determine if the script failed or was loaded.
 */
const useScript = (src) => {
  /**
   * Tracks whether the script loaded successfully or not.
   */
  const [hasLoaded, setLoaded] = useState(false)
  const [hasFailed, setFailed] = useState(false)

  useEffect(() => {
    /**
     * Check if the script has been loaded before; if it was, then we
     * don't need to load it again.
     */
    if (loadedScripts.includes(src)) {
      setLoaded(true)
    } else {
      loadedScripts.push(src)

      /**
       * Create script element.
       */
      const script = document.createElement('script')
      script.src = src
      script.type = 'text/javascript'
      script.async = true

      /**
       * Set the `hasLoaded` flag to `true` when the script is loaded.
       */
      const onLoad = () => {
        setLoaded(true)
      }

      /**
       * Set the `hasFailed` flag to `true` when the script has
       * failed to load.
       */
      const onError = () => {
        const srcIndex = loadedScripts.indexOf(src)

        /**
         * Remove `src` from the `loadedScripts` array if the script
         * fails to load.
         */
        if (srcIndex >= 0) {
          loadedScripts.splice(srcIndex, 1)
        }

        script.remove()
        setFailed(true)
      }

      script.onload = onLoad
      script.onerror = onError

      /**
       * Append the script to the `body` element.
       */
      document.body.appendChild(script)

      /**
       * Remove script event listeners when the component unmounts.
       */
      return () => {
        script.onload = () => {}
        script.onerror = () => {}
      }
    }
  }, [src])

  return [hasLoaded, hasFailed]
}

export default useScript
