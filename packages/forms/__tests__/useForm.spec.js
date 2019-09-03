import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'

import useForm from '../src/useForm'

describe('useForm', () => {
  test('`hasBeenSubmitted` flag is set to true after submitting the form', () => {
    const { result: state } = renderHook(() => {
      const [flag, setFlag] = useState(false)
      return { flag, setFlag }
    })

    const { result: form } = renderHook(() =>
      useForm({
        onSubmit: (event) => {
          state.current.setFlag(true)
        },
      }),
    )

    expect(form.current.hasBeenSubmitted).toBeFalsy()
    expect(state.current.flag).toBeFalsy()

    const { getByText } = render(
      <form.current.Form>Form Content</form.current.Form>,
    )

    act(() => {
      fireEvent.submit(getByText('Form Content'))
    })

    expect(form.current.hasBeenSubmitted).toBeTruthy()
    expect(state.current.flag).toBeTruthy()
  })
})
