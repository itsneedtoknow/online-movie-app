import { FilmCard } from "./FilmCard";
import { useEffect, useState } from "react";
import styles from "./FilmsList.module.css";
import { fetchFilms } from "../data/filmsData";
export function FilmsList() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then(setFilms)
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <section className="films">
      <div className="container-wrapper">
        <div className={styles.films_wrapper}>
          <h2 className="films__header">Cinema App</h2>
          <ul className={styles.films__list}>
            {films.map((filmItem) => {
              return <FilmCard key={filmItem.imdbID} filmItem={filmItem} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
