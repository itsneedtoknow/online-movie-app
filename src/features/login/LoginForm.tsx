//import styles from "./LoginForm.module.css";
import { SubmitEvent, useState } from "react";
import { Button } from "../../components/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authActions.js";

export function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userName.trim() && password.trim()) {
      dispatch(login(userName));
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userLogin">
          Login
          <input
            type="text"
            value={userName}
            id="userLogin"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="userPassword">
          Password
          <input
            type="password"
            id="userPassword"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <Button className="button-primary" type="submit">
          Log in
        </Button>
      </form>
    </>
  );
}
