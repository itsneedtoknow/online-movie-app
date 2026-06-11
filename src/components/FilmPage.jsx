import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchFilms } from "../data/filmsData";
export function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState();

  useEffect(() => {
    fetchFilms().then((data) => {
      let singleFilm = data.find((f) => {
        return f.imdbID === id;
      });
      setFilm(singleFilm);
    });
  }, [id]);
  if (!film) return <div>Loading...</div>;
  return <>{<h1>{film.Title}</h1>}</>;
}
