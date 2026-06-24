export const selectFilms = (state) => state.films.filmsList;
export const isAuthorized = (state) => state.auth.isAuthorized;
export const selectUser = (state) => state.auth.user;
export const isAdmin = (state) => state.auth.isAdmin;
