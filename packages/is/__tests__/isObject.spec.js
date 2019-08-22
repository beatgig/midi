import isObject from '../src/isObject'

describe('isObject', () => {
  test('validates that the given value is valid plain object', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject({ a: 1 })).toBeTruthy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject(0)).toBeFalsy()
    expect(isObject(-1)).toBeFalsy()
    expect(isObject([])).toBeFalsy()
    expect(isObject('')).toBeFalsy()
    expect(isObject(NaN)).toBeFalsy()
  })
})
