import { RootState } from "./store";
export const selectFilms = (state: RootState) => state.films.filmsList;
export const isAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectUser = (state: RootState) => state.auth.user;
export const isAdmin = (state: RootState) => state.auth.isAdmin;
