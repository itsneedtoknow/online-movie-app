import { filmsActionTypes } from "./actionTypes";

const initialState = {
  filmsList: [],
  isLoading: false,
};

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case filmsActionTypes.LOAD:
      return {
        ...state,
        filmsList: action.payload,
      };
    case filmsActionTypes.FILTER:
      return;

    default:
      return state;
  }
}
