import createValidation from '../src/createValidation'

describe('createValidation', () => {
  test('returns the error message when it fails', () => {
    const isLowerThanFive = createValidation(
      (value) => value <= 5,
      'Expected a value lower than 5.',
    )

    expect(isLowerThanFive(6)).toEqual('Expected a value lower than 5.')
    expect(isLowerThanFive(7)).toEqual('Expected a value lower than 5.')
  })

  test('returns null when it succeeds', () => {
    const isLowerThanFive = createValidation(
      (value) => value <= 5,
      'Expected a value lower than 5.',
    )

    expect(isLowerThanFive(4)).toBeNull()
    expect(isLowerThanFive(5)).toBeNull()
  })

  test('it accepts multiple values', () => {
    const isEqual = createValidation(
      (a, b) => a === b,
      'Expected the values to be equal',
    )

    expect(isEqual(1, 2)).toEqual('Expected the values to be equal')
    expect(isEqual(1, 1)).toBeNull()
  })
})
