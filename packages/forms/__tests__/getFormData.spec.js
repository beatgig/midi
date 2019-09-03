import getFormData from '../src/getFormData'

describe('getFormData', () => {
  const nameField = {
    isValid: true,
    name: 'name',
    value: 'name',
  }

  const emailField = {
    isValid: true,
    name: 'email',
    value: 'name@example.com',
  }

  test('returns a FormData object', () => {
    let formDataToObject = {}
    const formData = getFormData([nameField, emailField])

    for (let entry of formData.entries()) {
      formDataToObject[entry[0]] = entry[1]
    }

    expect(formDataToObject).toEqual({
      name: 'name',
      email: 'name@example.com',
    })
  })
})
