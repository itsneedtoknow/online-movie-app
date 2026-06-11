import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home } from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { FilmsList } from "./components/FilmsList.jsx";
import { FilmPage } from "./components/FilmPage.jsx";
let route = createBrowserRouter([
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
  <RouterProvider router={route} />,
);
