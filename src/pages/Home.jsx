import { LoginForm } from "../features/login/LoginForm.jsx";
import { isAuthorized } from "../redux/selectors.js";
import { isAdmin } from "../redux/selectors.js";
import { useSelector } from "react-redux";
import { Dashboard } from "../features/Dashboard/Dashboard.jsx";
import { AdminDashBoard } from "../features/AdminDashBoard/AdminDashboard.jsx";

export function Home() {
  const isUserAuthorized = useSelector(isAuthorized);
  const isUserAdmin = useSelector(isAdmin);
  return (
    <>
      <h1>Welcome to Cinema App</h1>
      <p>
        A service for searching and viewing information about films. Use the
        navigation above.
      </p>
      {isUserAuthorized ? (
        isUserAdmin ? (
          <AdminDashBoard />
        ) : (
          <Dashboard />
        )
      ) : (
        <LoginForm />
      )}
    </>
  );
}
