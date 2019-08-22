import compact from '../src/compact'

describe('compact', () => {
  test('should remove all null values', () => {
    const arrayWithNull = [1, 2, null, 3, null, 4]
    expect(compact(arrayWithNull)).toEqual([1, 2, 3, 4])
  })

  test('should remove all undefined values', () => {
    const arrayWithUndefined = [1, undefined, 2, 3, 4, undefined]
    expect(compact(arrayWithUndefined)).toEqual([1, 2, 3, 4])
  })

  test('should remove all empty string values', () => {
    const arrayWithEmptyStrings = ['', '', 1, 2, 3, 4]
    expect(compact(arrayWithEmptyStrings)).toEqual([1, 2, 3, 4])
  })

  test('should remove all false values', () => {
    const arrayWithFalse = [false, 1, 2, false, 3, 4]
    expect(compact(arrayWithFalse)).toEqual([1, 2, 3, 4])
  })

  test('should remove all NaN values', () => {
    const arrayWithNaN = [1, NaN, 2, NaN, 3, NaN, 4]
    expect(compact(arrayWithNaN)).toEqual([1, 2, 3, 4])
  })

  test('should remove all zero values', () => {
    const arrayWithZeros = [1, 0, 2, 3, 4, 0]
    expect(compact(arrayWithZeros)).toEqual([1, 2, 3, 4])
  })

  test('should remove all falsy values', () => {
    const arrayWithFalsyValues = [
      null,
      1,
      0,
      '',
      2,
      NaN,
      3,
      null,
      4,
      0,
      undefined,
      '',
    ]

    expect(compact(arrayWithFalsyValues)).toEqual([1, 2, 3, 4])
  })
})
