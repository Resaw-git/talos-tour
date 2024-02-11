import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuest: 0,
  },
  reducers: {
    nextQ: (state) => {
      if (state.currentQuest === 4) return;
      state.currentQuest++;
    },
    prevQ: (state) => {
      if (state.currentQuest === 0) return;
      state.currentQuest--;
    },
  },
});

export const { nextQ, prevQ } = quizSlice.actions;
