import isFunction from '../src/isFunction'

describe('isFunction', () => {
  test('validates that the given value is a function', () => {
    expect(isFunction(function() {})).toBeTruthy()
    expect(isFunction('hello')).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction(0)).toBeFalsy()
    expect(isFunction(-1)).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction(NaN)).toBeFalsy()
  })
})
