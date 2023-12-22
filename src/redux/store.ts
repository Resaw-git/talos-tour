import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "./slices/slider-slice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
