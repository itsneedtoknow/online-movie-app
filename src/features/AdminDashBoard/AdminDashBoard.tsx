import { selectUser } from "../../redux/selectors";
// @ts-ignore
import styles from "./AdminDashBoard.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authActions.js";
import { Button } from "../../components/Button.tsx";

export function AdminDashBoard() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles["admin-dashboard"]}>
      <section className={`${styles["admin-card"]} ${styles["profile-card"]}`}>
        <div className={styles["profile-info"]}>
          <div className={styles.avatar}>⚙️</div>
          <div>
            <h2>Admin Control Panel</h2>
            <p className={styles["admin-badge"]}>
              System Administrator: {userName}
            </p>
          </div>
        </div>
        <Button
          className={styles["logout-btn"]}
          onClick={() => {
            dispatch(logout());
          }}
          type="button"
        >
          Log out
        </Button>
      </section>

      <div className={styles["stats-grid"]}>
        <div className={styles["stat-box"]}>
          <span className={styles["stat-title"]}>Total Users</span>
          <span className={styles["stat-value"]}>1,248</span>
          <span className={`${styles["stat-trend"]} ${styles.positive}`}>
            +12% this week
          </span>
        </div>
        <div className={styles["stat-box"]}>
          <span className={styles["stat-title"]}>Total Movies</span>
          <span className={styles["stat-value"]}>452</span>
          <span className={styles["stat-sub"]}>Active in database</span>
        </div>
        <div className={styles["stat-box"]}>
          <span className={styles["stat-title"]}>Server Load</span>
          <span className={styles["stat-value"]}>24%</span>
          <div className={styles["server-indicator"]}>Stable</div>
        </div>
      </div>

      <div className={styles["admin-grid"]}>
        <div className={styles["admin-card"]}>
          <h3>Movie Management</h3>
          <p className={styles["card-text"]}>
            Add new films, update descriptions, or remove titles from the
            catalog.
          </p>
          <div className={styles["button-group"]}>
            <Button className={`${styles["admin-btn"]} ${styles.primary}`}>
              + Add New Movie
            </Button>
            <Button className={styles["admin-btn"]}>Edit Catalog</Button>
          </div>
        </div>

        <div className={styles["admin-card"]}>
          <h3>User & Review Moderation</h3>
          <p className={styles["card-text"]}>
            Manage user roles, ban accounts, and review reported comments or
            scores.
          </p>
          <div className={styles["button-group"]}>
            <Button className={styles["admin-btn"]}>
              Moderate Reviews (5 pending)
            </Button>
            <Button className={styles["admin-btn"]}>Manage Users</Button>
          </div>
        </div>

        <div className={styles["admin-card"]}>
          <h3>System Logs</h3>
          <div className={styles["log-list"]}>
            <div className={styles["log-item"]}>
              <span className={styles["log-time"]}>10:24</span>
              <span className={styles["log-text"]}>
                User 'cinema_fan' updated profile
              </span>
            </div>
            <div className={styles["log-item"]}>
              <span className={styles["log-time"]}>09:15</span>
              <span className={styles["log-text"]}>
                New movie 'Dune: Part Two' added
              </span>
            </div>
            <div className={styles["log-item"]}>
              <span className={styles["log-time"]}>04:02</span>
              <span className={styles["log-text"]} style={{ color: "#fbbf24" }}>
                Database backup completed
              </span>
            </div>
          </div>
          <Button className={`${styles["admin-btn"]} ${styles.text}`}>
            View All Logs →
          </Button>
        </div>
      </div>
    </div>
  );
}
