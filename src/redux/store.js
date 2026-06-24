import { filmActions } from "./slices/filmActions.js";
import { authActions } from "./slices/authActions.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    films: filmActions.reducer,
    auth: authActions.reducer,
  },
});
