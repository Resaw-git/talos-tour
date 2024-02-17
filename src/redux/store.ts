import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "./slices/slider-slice";
import { quizSlice } from "./slices/quiz-slice";
import { modalSlice } from "./slices/modal-slice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
    quiz: quizSlice.reducer,
    modal: modalSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
