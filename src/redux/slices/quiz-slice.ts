import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    country: "",
    dates: {
      arrival: "",
      return: "",
    },
    persons: {
      adults: 0,
      children: 0,
    },
    stars: 0,
    nutrition: "",
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
    setAdults: (state, action) => {
      state.persons.adults = action.payload;
    },
    setChildren: (state, action) => {
      state.persons.children = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setDateArrival: (state, action) => {
      state.dates.arrival = action.payload;
    },
    setDateReturn: (state, action) => {
      state.dates.return = action.payload;
    },
    setNutrition: (state, action) => {
      state.nutrition = action.payload;
    },
    setStars: (state, action) => {
      state.stars = action.payload;
    },
  },
});

export const {
  nextQ,
  prevQ,
  setCountry,
  setDateArrival,
  setDateReturn,
  setAdults,
  setChildren,
  setStars,
  setNutrition,
} = quizSlice.actions;
