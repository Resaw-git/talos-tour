import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    seasons: ""
} 

export const seasonsSlice = createSlice({
  name: "seasons",
  initialState,
  reducers: {
    setSeason: (state, action: PayloadAction<string>) => {
      state.seasons = action.payload;
    },
  },
});

export const { setSeason } = seasonsSlice.actions;

export default seasonsSlice.reducer;