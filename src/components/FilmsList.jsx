import { FilmCard } from "./FilmCard";
import styles from "./FilmsList.module.css";
export function FilmsList() {
  return (
    <section className="films">
      <div className="container-wrapper">
        <div className={styles.films_wrapper}>
          <h2 className="films__header">Cinema App</h2>
          <ul className={styles.films__list}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
          </ul>
        </div>
      </div>
    </section>
  );
}
