import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/slider-slice";
import quizReducer from "./slices/quiz-slice";
import modalReducer from "./slices/modal-slice";
import submitReducer from "./slices/submit-slice";
import seasonsReducer from "./slices/seasons-slice";

const rootReducer = combineReducers({
  slider: sliderReducer,
  quiz: quizReducer,
  modal: modalReducer,
  submit: submitReducer, 
  seasons: seasonsReducer
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
