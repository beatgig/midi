import areValid from '../src/areValid'

describe('areValid', () => {
  const nameField = { value: 'name', isValid: true }
  const emailField = { value: 'name@example.com', isValid: true }

  test('returns true if all the fields are valid', () => {
    expect(areValid([nameField, emailField])).toBeTruthy()
  })

  test('returns false if one of the fields is not valid', () => {
    expect(areValid([nameField, emailField, {}])).toBeFalsy()
  })
})
