import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchFilms } from "../redux/filmsData.js";
// @ts-ignore
import styles from "./FilmPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "../redux/selectors.js";
import { ThunkDispatch } from "@reduxjs/toolkit";

export function FilmPage() {
  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const films = useSelector(selectFilms);
  const film = films.find((f) => f.imdbID === id);
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  if (!film) return <div className="loading">Загрузка...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.poster}>
        <img src={film.Poster} alt={film.Title} loading="lazy" />
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
            <strong>Author:</strong> {film.Director}
          </div>
          <div>
            <strong>Actors:</strong> {film.Actors}
          </div>
        </div>
      </div>
    </div>
  );
}
