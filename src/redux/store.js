// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {},
// });
import { createStore, combineReducers, applyMiddleware } from "redux";
import { filmReducer } from "./films/filmReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  films: filmReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
//console.log(store);
