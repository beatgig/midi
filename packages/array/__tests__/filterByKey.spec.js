import filterByKey from '../src/filterByKey'

describe('filterByKey', () => {
  test('should filter all objects where the "label" key contains the word "hello"', () => {
    const collection = [
      { id: 1, label: 'Hola world!' },
      { id: 2, label: 'Hello world!' },
      { id: 3, label: "Kon'nichiwa world!" },
    ]

    expect(filterByKey(collection, 'label', 'hello')).toEqual([
      { id: 2, label: 'Hello world!' },
    ])
  })
})
