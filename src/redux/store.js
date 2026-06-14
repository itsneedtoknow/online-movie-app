import { filmsSlice } from "./slices/filmsSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    films: filmsSlice.reducer,
  },
});
