import { loadFilms } from "../redux/films/filmActions";
export const fetchFilms = () => async (dispatch) => {
  const FETCH_URL =
    "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/075b6aaba5ee43554ecd55006e5d080a8acf08fe/Film.JSON";

  return fetch(FETCH_URL)
    .then((res) => res.json())
    .then((data) => dispatch(loadFilms(data)))
    .catch((err) => console.error("Ошибка загрузки:", err));
};
