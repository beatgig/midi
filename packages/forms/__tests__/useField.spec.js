import { act, renderHook } from '@testing-library/react-hooks'

import createValidation from '../src/createValidation'
import useField from '../src/useField'

describe('useField', () => {
  const textEvent = {
    target: {
      type: 'text',
      value: 'something',
    },
  }

  const checkboxEvent = {
    target: {
      type: 'checkbox',
      value: 'something',
      checked: true,
    },
  }

  test('creates a field with no value', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'lowerThanFive',
      }),
    )

    expect(result.current.name).toEqual('lowerThanFive')
    expect(result.current.value).toBeNull()
  })

  test('field with 1 validation', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'lowerThanFive',
        initialValue: 6,
        validations: [
          createValidation(
            (value) => value <= 5,
            'Expected a value lower than 5.',
          ),
        ],
      }),
    )

    expect(result.current.isValid).toBeFalsy()
    act(() => result.current.validate(3))
    expect(result.current.isValid).toBeTruthy()
    expect(result.current.rawValue).toEqual(3)
    expect(result.current.value).toEqual(3)
  })

  test('field with multiple validation', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'lowerThanFiveNotThree',
        initialValue: 3,
        validations: [
          createValidation(
            (value) => value <= 5,
            'Expected a value lower than 5.',
          ),
          createValidation(
            (value) => value !== 3,
            'Expected a value lower than 5 and not 3.',
          ),
        ],
      }),
    )

    expect(result.current.isValid).toBeFalsy()
    expect(result.current.error).toEqual(
      'Expected a value lower than 5 and not 3.',
    )
    act(() => result.current.validate(6))
    expect(result.current.isValid).toBeFalsy()
    expect(result.current.error).toEqual('Expected a value lower than 5.')
  })

  test('field with a formatter', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'firstName',
        formatter: (value) =>
          value.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          }),
      }),
    )

    act(() => result.current.setValue('doe'))
    expect(result.current.rawValue).toEqual('doe')
    expect(result.current.value).toEqual('Doe')
  })

  test('sets a new value', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'firstName',
        initialValue: 'doe',
      }),
    )

    expect(result.current.value).toEqual('doe')
    expect(result.current.dirty).toBeFalsy()
    act(() => result.current.setValue('DoE'))
    expect(result.current.dirty).toBeTruthy()
    expect(result.current.value).toEqual('DoE')
  })

  test('sets a new value from a DOM event', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'firstName',
        initialValue: 'doe',
      }),
    )

    expect(result.current.value).toEqual('doe')
    expect(result.current.dirty).toBeFalsy()
    act(() => result.current.setValueFromEvent(textEvent))
    expect(result.current.dirty).toBeTruthy()
    expect(result.current.value).toEqual('something')
  })

  test('sets a new value from a DOM event on checkbox', () => {
    const { result } = renderHook(() =>
      useField({
        name: 'firstName',
        initialValue: 'doe',
      }),
    )

    expect(result.current.value).toEqual('doe')
    expect(result.current.dirty).toBeFalsy()
    act(() => result.current.setValueFromEvent(checkboxEvent))
    expect(result.current.dirty).toBeTruthy()
    expect(result.current.value).toEqual('something')
    expect(result.current.checked).toBeTruthy()
  })
})
