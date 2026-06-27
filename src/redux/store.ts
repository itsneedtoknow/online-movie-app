import { filmActions } from "./slices/filmActions.ts";
import { authActions } from "./slices/authActions.ts";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    films: filmActions.reducer,
    auth: authActions.reducer,
  },
});
