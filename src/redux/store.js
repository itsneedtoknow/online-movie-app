import { filmActions } from "./slices/filmActions.js";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    films: filmActions.reducer,
  },
});
