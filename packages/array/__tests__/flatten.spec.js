import flatten from '../src/flatten'

describe('flatten', () => {
  test("should return an array that's only one level deep", () => {
    const array = [1, 2, [3, 4, [5], 6], 7]
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
