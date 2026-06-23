import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmsList: [],
  isLoading: false,
};
export const filmActions = createSlice({
  name: "films",
  initialState,
  reducers: {
    load(state, action) {
      state.filmsList = action.payload;
    },
    filter(state, action) {
      state.filmsList = state.filmsList.filter(
        (item) => item.imdbID === action.payload.id,
      );
    },
  },
});

export const { load, filter } = filmActions.actions;
export default filmActions.reducer;
