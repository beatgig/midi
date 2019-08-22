import unique from '../src/unique'

describe('unique', () => {
  test('should return an array of unique values.', () => {
    expect(unique([1, 1, 2, 4, 3, 4])).toEqual([1, 2, 4, 3])
    expect(unique(['a', 'b', 'c', 'a', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
  })
})
