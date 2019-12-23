import isBrowser from '../src/isBrowser'

describe('isBrowser', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(global, 'window', 'get')
  })

  afterEach(() => {
    spy.mockRestore()
  })

  test('returns true in environments without DOM support.', () => {
    spy.mockImplementation(() => ({
      document: {
        createElement: () => {},
      },
    }))

    expect(isBrowser()).toBeTruthy()
  })

  test('returns false in environments without DOM support.', () => {
    spy.mockImplementation(() => undefined)
    expect(isBrowser()).toBeFalsy()
  })
})
