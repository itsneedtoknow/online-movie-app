import { logout } from "../../redux/slices/authActions.js";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/selectors.js";
//@ts-ignore
import styles from "./Dashboard.module.css";
import { Button } from "../../components/Button.js";

export function Dashboard() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.dashboard}>
      <section
        className={`${styles["dashboard-card"]} ${styles["profile-card"]}`}
      >
        <div className={styles["profile-info"]}>
          <div className={styles.avatar}>👋</div>
          <div>
            <h2>Welcome back, {userName}!</h2>
            <p className={styles["status-badge"]}>Premium Member</p>
          </div>
        </div>
        <Button
          className={styles["logout-btn"]}
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log out
        </Button>
      </section>

      <div className={styles["dashboard-grid"]}>
        {/* Карточка 1: Избранное */}
        <div className={styles["dashboard-card"]}>
          <h3>My Watchlist</h3>
          <p className={styles["card-count"]}>0 films</p>
          <p className={styles["card-text"]}>
            Your saved movies will appear here.
          </p>
          <Button className={styles["card-action-btn"]}>Explore Films</Button>
        </div>

        <div className={`${styles["dashboard-card"]} ${styles.highlights}`}>
          <h3>Movie of the Day</h3>
          <div className={styles["movie-mini-banner"]}>
            <span className={styles.rating}>★ 8.9</span>
            <h4>Interstellar</h4>
            <p>Sci-Fi, Drama</p>
          </div>
          <Button className={`${styles["card-action-btn"]} ${styles.primary}`}>
            Watch Now
          </Button>
        </div>
        <div className={styles["dashboard-card"]}>
          <h3>Viewing Activity</h3>
          <p className={styles["card-text"]}>
            You watched 12 hours of content this week.
          </p>
          <div className={styles["progress-bar"]}>
            <div
              className={styles["progress-fill"]}
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
