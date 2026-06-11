import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchFilms } from "../data/filmsData";
import styles from "./FilmPage.module.css";

export function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState();

  useEffect(() => {
    fetchFilms().then((data) => {
      const singleFilm = data.find((f) => f.imdbID === id);
      setFilm(singleFilm);
    });
  }, [id]);

  if (!film) return <div className="loading">Загрузка...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.poster}>
        <img src={film.Poster} alt={film.Title} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{film.Title}</h1>
        <div className={styles.meta}>
          <span className={styles.year}>{film.Year}</span>
          <span className={styles.rating}>★ {film.imdbRating}</span>
          <span className={styles.genre}>{film.Genre}</span>
        </div>
        <p className={styles.plot}>{film.Plot}</p>
        <div className={styles.details}>
          <div>
            <strong>Режиссёр:</strong> {film.Director}
          </div>
          <div>
            <strong>Актёры:</strong> {film.Actors}
          </div>
        </div>
      </div>
    </div>
  );
}
