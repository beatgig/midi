import toArray from '../src/toArray'

describe('toArray', () => {
  test('should return the given value as an array.', () => {
    expect(toArray(1)).toEqual([1])
    expect(toArray('hello')).toEqual(['hello'])
    expect(toArray(undefined)).toEqual([undefined])
  })

  test("should return the given value intact if it's already an array.", () => {
    expect(toArray([1])).toEqual([1])
    expect(toArray(['hello'])).toEqual(['hello'])
    expect(toArray([[1]])).toEqual([[1]])
  })
})
