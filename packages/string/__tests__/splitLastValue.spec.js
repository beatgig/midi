import splitLastValue from '../src/splitLastValue'

describe('splitLastValue', () => {
  test('split by string', () => {
    expect(splitLastValue('http://example.com/some/path', '/')).toEqual('path')
  })

  test('split by regexp', () => {
    expect(splitLastValue('http://example.com/some/path', /\//)).toEqual('path')
  })
})
