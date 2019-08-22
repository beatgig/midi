import toParams from '../src/toParams'

describe('toParams', () => {
  test('converts an object to query parameters', () => {
    expect(toParams({ a: 1, b: 2, list: [1, 2] })).toEqual(
      'a%3D1&b%3D2&list%5B%5D%3D1%26list%5B%5D%3D2',
    )
  })
})
