import { isFunction } from '@beatgig/is'
import { toArray } from '@beatgig/array'
import { useEffect } from 'react'

/**
 * Calls the given `callback` function(s) when the component unmounts.
 *
 * @param {Function[]|Function} [callbacks=[]] - Callback function(s) to be executed when the component unmounts.
 */
const useCleanup = (callbacks = []) => {
  useEffect(
    () => () => {
      toArray(callbacks).forEach((callback) => {
        if (isFunction(callback)) {
          callback()
        }
      })
    },
    [callbacks],
  )
}

export default useCleanup
