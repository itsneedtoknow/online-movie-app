import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { RouterProvider, createHashRouter } from "react-router";
import { FilmsList } from "./features/films/filmsList/FilmsList.jsx";
import { FilmPage } from "./pages/FilmPage.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
let route = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "films",
        element: <FilmsList />,
      },
      {
        path: "films/:id",
        element: <FilmPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>,
);
