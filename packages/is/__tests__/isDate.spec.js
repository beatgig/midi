import isDate from '../src/isDate'

describe('isDate', () => {
  test('validates that the given value is a valid date', () => {
    expect(isDate(1556908093)).toBeTruthy()
    expect(isDate(Date.now())).toBeTruthy()
    expect(isDate(NaN)).toBeFalsy()
    expect(isDate(undefined)).toBeFalsy()
    expect(isDate(null)).toBeFalsy()
    expect(isDate([])).toBeFalsy()
    expect(isDate({})).toBeFalsy()
  })
})
