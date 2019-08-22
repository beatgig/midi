import toParamsObject from '../src/toParamsObject'

describe('toParamsObject', () => {
  test('converts a query parameters string to an object', () => {
    expect(toParamsObject('a=1&b=2&list=1,2&arr[]=1&arr[]=2')).toEqual({
      a: 1,
      b: 2,
      arr: [1, 2],
      list: '1,2',
    })
  })
})
