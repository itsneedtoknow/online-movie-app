import { Children } from "react";
import "./App.css";
import { FilmsList } from "./components/FilmsList";

function App() {
  return (
    <>
      <FilmsList>{Children}</FilmsList>
    </>
  );
}

export default App;
