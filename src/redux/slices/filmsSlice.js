import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmsList: [],
  isLoading: false,
};
export const filmsSlice = createSlice({
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

export const { load, filter } = filmsSlice.actions;
export default filmsSlice.reducer;
