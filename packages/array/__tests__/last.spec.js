import last from '../src/last'

describe('last', () => {
  test('should return the last value of the array.', () => {
    const array = [1, 2, 3, '4']
    expect(last(array)).toEqual('4')
  })

  test("should return the given value if it's not an array.", () => {
    expect(last(2)).toEqual(2)
    expect(last('hello')).toEqual('hello')
    expect(last(null)).toEqual(null)
  })
})
