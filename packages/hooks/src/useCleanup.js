import { isFunction } from '@beatgig/is'
import { toArray } from '@beatgig/array'
import { useEffect } from 'react'

/**
 * Calls the given `callback` function(s) when the component unmounts.
 *
 * @param {function[]|function} [callbacks=[]]
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
