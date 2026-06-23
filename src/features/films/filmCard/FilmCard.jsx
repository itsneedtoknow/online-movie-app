import styles from "./FilmCard.module.css";
import { Link } from "react-router";

export function FilmCard({ filmItem }) {
  return (
    <li className={styles.film__item}>
      <div className={styles.film__img}>
        <Link to={filmItem.imdbID}>
          <img src={filmItem.Poster} loading="lazy" />
        </Link>
      </div>
      <div className={styles.film__content}>
        <h3 className={styles.film__title}>
          <Link to={filmItem.imdbID}>{filmItem.Title}</Link>
        </h3>
        <p className={styles.film__description}>{filmItem.Plot}</p>
        <Link to={filmItem.imdbID} className={styles.film__readmore}>
          read more
        </Link>
      </div>
    </li>
  );
}
