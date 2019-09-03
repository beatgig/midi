import getRawValues from '../src/getRawValues'

describe('getRawValues', () => {
  const nameField = {
    isValid: true,
    name: 'name',
    rawValue: 'name',
    value: 'Name',
  }

  const phoneField = {
    isValid: true,
    name: 'phone',
    rawValue: '7875555555',
    value: '(787) 555-5555',
  }

  test('returns all raw values from each field', () => {
    expect(getRawValues([nameField, phoneField])).toEqual({
      name: 'name',
      phone: '7875555555',
    })
  })
})
