import { LoginForm } from "../features/login/LoginForm.tsx";
import { isAuthorized } from "../redux/selectors.ts";
import { isAdmin } from "../redux/selectors.ts";
import { useSelector } from "react-redux";
import { Dashboard } from "../features/Dashboard/Dashboard.tsx";
import { AdminDashBoard } from "../features/AdminDashBoard/AdminDashBoard.tsx";

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
