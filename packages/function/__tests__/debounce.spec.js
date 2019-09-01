import debounce from '../src/debounce'

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.clearAllTimers()
  })

  test('should call the callback function after 1 second', () => {
    const callback = jest.fn()

    debounce(callback, 1000)()
    expect(callback).not.toBeCalled()
    jest.advanceTimersByTime(500)
    expect(callback).not.toBeCalled()
    jest.advanceTimersByTime(1000)
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('should cancel calling the callback function after 1 second', () => {
    const callback = jest.fn()
    const debounced = debounce(callback, 1000)

    const cancel = debounced()
    expect(callback).not.toBeCalled()
    jest.advanceTimersByTime(500)
    expect(callback).not.toBeCalled()
    cancel()
    jest.advanceTimersByTime(1000)
    expect(callback).not.toBeCalled()
    expect(callback).toHaveBeenCalledTimes(0)
  })
})
