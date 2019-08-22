import updateArrayItem from '../src/updateArrayItem'

describe('updateArrayItem', () => {
  test("should update the array's second value.", () => {
    expect(updateArrayItem([1, 2, 3, 4], 1, '2')).toEqual([1, '2', 3, 4])
  })
})
