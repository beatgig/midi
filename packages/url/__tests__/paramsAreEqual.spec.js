import paramsAreEqual from '../src/paramsAreEqual'

describe('paramsAreEqual', () => {
  test('different order of keys', () => {
    expect(
      paramsAreEqual(
        'a=1&2=b&list=a,b&arr[]=2&arr[]=a',
        'a=1&list=a,b&2=b&arr[]=2&arr[]=a',
      ),
    ).toBeTruthy()
  })

  test('one encoded url', () => {
    expect(
      paramsAreEqual(
        'a=1&2=b&list=a,b&arr[]=a&arr[]=b',
        'a%3D1%262%3Db%26list%3Da%2Cb%26arr%5B%5D%3Da%26arr%5B%5D%3Db',
      ),
    ).toBeTruthy()
  })
})
