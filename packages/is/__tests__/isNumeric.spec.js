import isNumeric from '../src/isNumeric'

describe('isNumeric', () => {
  test('validates that the given value is numeric', () => {
    expect(isNumeric('123456')).toBeTruthy()
    expect(isNumeric('1.23456')).toBeTruthy()
    expect(isNumeric(1.23456)).toBeTruthy()
    expect(isNumeric(1234567)).toBeTruthy()
    expect(isNumeric('hello12345')).toBeFalsy()
    expect(isNumeric('hello')).toBeFalsy()
    expect(isNumeric(NaN)).toBeFalsy()
    expect(isNumeric(undefined)).toBeFalsy()
    expect(isNumeric(null)).toBeFalsy()
  })
})
