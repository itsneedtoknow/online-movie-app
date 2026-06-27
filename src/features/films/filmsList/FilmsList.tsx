import { FilmCard } from "../filmCard/FilmCard.js";
import { useEffect } from "react";
//@ts-ignore
import styles from "./FilmsList.module.css";
import { fetchFilms } from "../../../redux/filmsData.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "../../../redux/selectors.js";
import { ThunkDispatch } from "redux-thunk";

function FilmsList() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const films = useSelector(selectFilms);

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
export default FilmsList;
