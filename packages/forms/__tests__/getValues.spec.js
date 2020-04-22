import getValues from '../src/getValues'

describe('getValues', () => {
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

  test('returns all values from each field', () => {
    expect(getValues([nameField, phoneField])).toEqual({
      name: 'Name',
      phone: '(787) 555-5555',
    })
  })

  test('doesnt throw error if one or more fields are null or undefined', () => {
    expect(getValues([nameField, null, phoneField, undefined])).toEqual({
      name: 'Name',
      phone: '(787) 555-5555',
    })
  })
})
