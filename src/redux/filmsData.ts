import { load } from "./slices/filmActions.js";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const fetchFilms =
  () => async (dispatch: ThunkDispatch<any, any, any>) => {
    const FETCH_URL =
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/075b6aaba5ee43554ecd55006e5d080a8acf08fe/Film.JSON";

    return fetch(FETCH_URL)
      .then((res) => res.json())
      .then((data) => dispatch(load(data)))
      .catch((err) => console.error("Ошибка загрузки:", err));
  };
