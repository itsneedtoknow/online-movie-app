import { createSlice } from "@reduxjs/toolkit";
import { FilmItem } from "../../features/films/filmCard/FilmCard";
interface FilmState {
  filmsList: FilmItem[];
  isLoading: boolean;
}
const initialState: FilmState = {
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
