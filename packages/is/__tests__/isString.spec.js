import isString from '../src/isString'

describe('isString', () => {
  test('validates that the given value is a string', () => {
    expect(isString('')).toBeTruthy()
    expect(isString('hello')).toBeTruthy()
    expect(isString(undefined)).toBeFalsy()
    expect(isString(null)).toBeFalsy()
    expect(isString(0)).toBeFalsy()
    expect(isString(-1)).toBeFalsy()
    expect(isString([])).toBeFalsy()
    expect(isString({})).toBeFalsy()
    expect(isString(NaN)).toBeFalsy()
  })
})
