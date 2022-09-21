import { Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";

function App() {
  /* const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesApi.getMovies().then((res) => {
      console.log(res);
      setMovies(res);
      localStorage.setItem("movies", JSON.stringify(res));
    });
  }, []); */
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
