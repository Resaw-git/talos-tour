import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    items: [],
    slide: 0,
    touchPosition: null,
    autoPlay: false,
    autoPlayTime: 5000,
  },
  reducers: {
    loadImages: (state, action) => {
      state.items = action.payload;
    },
    setAutoPlay: (state, action) => {
      state.autoPlay = action.payload;
    },
    changeSlide: (state, action) => {
      let slideNumber: number;
      if (state.slide + action.payload < 0) {
        slideNumber = state.items.length - 1;
      } else {
        slideNumber = (state.slide + action.payload) % state.items.length;
      }
      state.slide = slideNumber;
    },
    goToSlide: (state, action) => {
      state.slide = action.payload % state.items.length;
    },
    handleTouchStart: (state, action) => {
      state.touchPosition = action.payload;
    },
    handleTouchMove: (state, action) => {
      if (state.touchPosition === null) {
        return;
      }

      const currentPosition = action.payload;
      const direction = state.touchPosition - currentPosition;

      if (direction > 10) {
        state.slide = 1;
      }

      if (direction < -10) {
        state.slide = -1;
      }

      state.touchPosition = null;
    },
  },
});

export const { loadImages, goToSlide, changeSlide, handleTouchStart, handleTouchMove, setAutoPlay } =
  sliderSlice.actions;

export default sliderSlice.reducer;