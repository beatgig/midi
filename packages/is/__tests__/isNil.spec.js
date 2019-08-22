import isNil from '../src/isNil'

describe('isNil', () => {
  test('validates that the given value is either null or undefined', () => {
    expect(isNil(undefined)).toBeTruthy()
    expect(isNil(null)).toBeTruthy()
    expect(isNil(0)).toBeFalsy()
    expect(isNil(-1)).toBeFalsy()
    expect(isNil([])).toBeFalsy()
    expect(isNil({})).toBeFalsy()
    expect(isNil('')).toBeFalsy()
    expect(isNil(NaN)).toBeFalsy()
  })
})
