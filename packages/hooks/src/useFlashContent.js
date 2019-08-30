import { useRef, useState, useEffect } from 'react'

import usePreviousValue from './usePreviousValue'

/**
 * Used to display content for a specific period of time.
 *
 * @param {object} options - Options to control the timing of the message.
 * @param {object} options.timeVisible - Time in milliseconds the content should be visible
 * @param {object} options.shouldFlashNext - Boolean flag to determine whether or not to display the content
 * @param {object} [options.onContentHidden] - Callback function to be called when the content is no longer visible
 * @returns {boolean} - A boolean flag that determines whether or not the message should be visible.
 */
const useFlashContent = ({
  timeVisible,
  shouldFlashNext,
  onContentHidden = () => {},
}) => {
  const timeoutRef = useRef(null)
  const previousValue = usePreviousValue(shouldFlashNext)
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    if (previousValue && !shouldFlashNext) {
      clearTimeout(timeoutRef.current)
      setVisibility(true)

      timeoutRef.current = setTimeout(() => {
        setVisibility(false)
        onContentHidden()
      }, timeVisible)
    }
  }, [onContentHidden, previousValue, shouldFlashNext, timeVisible])

  useEffect(() => {
    clearTimeout(timeoutRef.current)
  }, [])

  return isVisible
}

export default useFlashContent
