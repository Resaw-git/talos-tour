import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
    burger: false,
  },
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    openBurger: (state) => {
      state.burger = true;
    },
    closeBurger: (state) => {
      state.burger = false;
    },
  },
});

export const { openModal, closeModal, openBurger, closeBurger } = modalSlice.actions;
