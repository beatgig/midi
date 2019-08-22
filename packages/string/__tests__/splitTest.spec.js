import splitTest from '../src/splitTest'

describe('splitTest', () => {
  test('test by string', () => {
    expect(splitTest('a-a-a', '-', 'a')).toBeTruthy()
  })

  test('test by regexp', () => {
    expect(splitTest('a-a-a', '-', /a/)).toBeTruthy()
  })

  test('test by function', () => {
    expect(splitTest('a-a-a', '-', (value) => value === 'a')).toBeTruthy()
  })
})
