import { isPasswordLength } from '../src/index'

describe('isPasswordLength', () => {
  test('validates that the given value is the minimum length of a password', () => {
    expect(isPasswordLength('thisisalongstring')).toBeTruthy()
    expect(isPasswordLength('nope')).toBeFalsy()
    expect(isPasswordLength(NaN)).toBeFalsy()
    expect(isPasswordLength(undefined)).toBeFalsy()
    expect(isPasswordLength(null)).toBeFalsy()
    expect(isPasswordLength([])).toBeFalsy()
    expect(isPasswordLength({})).toBeFalsy()
  })
})
