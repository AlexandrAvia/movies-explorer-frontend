import { Route, Router, Routes, useNavigate } from "react-router-dom";
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
import { mainApi } from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [responseMessage, setresponseMessage] = useState("");

  useEffect(() => {
    moviesApi.getMovies().then((res) => {
      setMovies(res);
      console.log(res);
      localStorage.setItem("movies", JSON.stringify(res));
    });
  }, []);

  const handleRegister = ({ name, email, password }) => {
    return mainApi
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setresponseMessage(err);
      });
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/signup"
          element={
            <Register
              handleRegister={handleRegister}
              responseMessage={responseMessage}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
