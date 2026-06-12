import { filmsActionTypes } from "./actionTypes";

export const loadFilms = (films) => {
  return {
    type: filmsActionTypes.LOAD,
    payload: films,
  };
};
