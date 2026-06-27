import { createRoot } from "react-dom/client";
import React from "react";
import { Suspense } from "react";
// @ts-ignore
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import AppRouter from "./router.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div className="loading">Загрузка страницы...</div>}>
        <AppRouter />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
