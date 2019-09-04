import isEmail from '../src/isEmail'

describe('isEmail', () => {
  test('validates that the given value is a valid email', () => {
    expect(isEmail('email@example.com')).toBeTruthy()
    expect(isEmail('email@example.io')).toBeTruthy()
    expect(isEmail('email@example.edu')).toBeTruthy()
    expect(isEmail('email@example.net')).toBeTruthy()
    expect(isEmail('email@example.ninja')).toBeTruthy()
    expect(isEmail()).toBeFalsy()
    expect(isEmail('')).toBeFalsy()
    expect(isEmail('email@example')).toBeFalsy()
    expect(isEmail('email@example.')).toBeFalsy()
    expect(isEmail(Date.now())).toBeFalsy()
    expect(isEmail(NaN)).toBeFalsy()
    expect(isEmail(undefined)).toBeFalsy()
    expect(isEmail(null)).toBeFalsy()
    expect(isEmail([])).toBeFalsy()
    expect(isEmail({})).toBeFalsy()
  })
})
