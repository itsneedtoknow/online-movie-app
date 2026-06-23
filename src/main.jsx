import { createRoot } from "react-dom/client";
import React from "react";
import { Suspense } from "react";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import AppRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div className="loading">Загрузка страницы...</div>}>
        <AppRouter />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
