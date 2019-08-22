import isEmptyObject from '../src/isEmptyObject'

describe('isEmptyObject', () => {
  test('validates that the given value is an empty object', () => {
    expect(isEmptyObject({})).toBeTruthy()
    expect(isEmptyObject(1556908093)).toBeFalsy()
    expect(isEmptyObject(Date.now())).toBeFalsy()
    expect(isEmptyObject(NaN)).toBeFalsy()
    expect(isEmptyObject(undefined)).toBeFalsy()
    expect(isEmptyObject(null)).toBeFalsy()
    expect(isEmptyObject([])).toBeFalsy()
    expect(isEmptyObject({ a: 1 })).toBeFalsy()
  })
})
