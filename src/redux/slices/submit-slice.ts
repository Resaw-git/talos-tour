import { createSlice } from "@reduxjs/toolkit";

export const submitSlice = createSlice({
  name: "submit",
  initialState: {
    submit: false,
    loading: false,
    success: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setSuccess: (state, action) => {
      state.success = action.payload
    },
    setSubmit: (state, action) => {
      state.submit = action.payload
    },
  },
});

export const { setLoading, setSuccess, setSubmit } = submitSlice.actions;
