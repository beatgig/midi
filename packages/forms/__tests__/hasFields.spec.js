import hasFields from '../src/hasFields'

describe('hasFields', () => {
  test('the given array of fields is not empty', () => {
    expect(hasFields([])).toBeFalsy()

    expect(
      hasFields([{ name: 'email', value: 'name@example.com' }]),
    ).toBeTruthy()
  })
})
