import { FilmCard } from "../filmCard/FilmCard.jsx";
import { useEffect } from "react";
import styles from "./FilmsList.module.css";
import { fetchFilms } from "../../../redux/filmsData";
import { useDispatch, useSelector } from "react-redux";
import { filmsSelector } from "../../../redux/selectors";

export function FilmsList() {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

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
