import { lazy } from "react";
import { createHashRouter } from "react-router";
import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { FilmPage } from "./pages/FilmPage.jsx";
import { RouterProvider } from "react-router";
const FilmsList = lazy(
  () => import("./features/films/filmsList/FilmsList.jsx"),
);
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
export default function AppRouter() {
  return <RouterProvider router={route} />;
}
