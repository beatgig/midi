import isElement from '../src/isElement'

describe('isElement', () => {
  test('validates that the given value is a valid DOM element', () => {
    const el = document.createElement('div')

    expect(isElement(el)).toBeTruthy()
    expect(isElement(1556908093)).toBeFalsy()
    expect(isElement(Date.now())).toBeFalsy()
    expect(isElement(NaN)).toBeFalsy()
    expect(isElement(undefined)).toBeFalsy()
    expect(isElement(null)).toBeFalsy()
    expect(isElement([])).toBeFalsy()
    expect(isElement({})).toBeFalsy()
  })
})
