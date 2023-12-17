import { createSlice } from '@reduxjs/toolkit'

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = exampleSlice.actions
