import styles from "./FilmCard.module.css";
import { Link } from "react-router";

export function FilmCard() {
  return (
    <li className={styles.film__item}>
      <div className={styles.film__img}></div>
      <div className={styles.film__content}>
        <h3 className={styles.film__title}>
          <Link to="">Title</Link>
        </h3>
        <p className={styles.film__description}>description</p>
        <a href="" className={styles.film__readmore}>
          read more
        </a>
      </div>
    </li>
  );
}
