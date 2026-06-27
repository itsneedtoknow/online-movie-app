//@ts-ignore
import styles from "./FilmCard.module.css";
import { Link } from "react-router";
export interface FilmItem {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Response: "True" | "False";
  Images: string[];
}
interface FilmCardProps {
  filmItem: FilmItem;
}
export function FilmCard({ filmItem }: FilmCardProps) {
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
