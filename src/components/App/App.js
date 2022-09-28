import { Route, Router, Routes, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [responseMessage, setresponseMessage] = useState("");

  useEffect(() => {
    tokenCheck();
  }, []);

  /* useEffect(() => {
    moviesApi.getMovies().then((res) => {
      setMovies(res);
      localStorage.setItem("movies", JSON.stringify(res));
    });
  }, []); */

  const handleRegister = ({ name, email, password }) => {
    return mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setresponseMessage(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    return mainApi
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        tokenCheck();
      })
      .then(() => {
        navigate("/movies");
      })
      .catch((err) => {
        setresponseMessage(err);
      });
  };

  const tokenCheck = () => {
    let jwt = localStorage.getItem("token");
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            let userData = {
              id: res._id,
              email: res.email,
              name: res.name,
            };
            setLoggedIn(true);
            setCurrentUser(userData);
            console.log(userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main isLogedin={loggedIn} />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <Register
                  handleRegister={handleRegister}
                  responseMessage={responseMessage}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signin"
            element={
              !loggedIn ? (
                <Login
                  handleLogin={handleLogin}
                  responseMessage={responseMessage}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
