import {
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { movieMapper } from "../../utils/movieMapper";
import { SEARCH_QUERY_LS_KEY, FILTER_LS_KEY } from '../../constants/constants';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [responseMessage, setresponseMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies().then((res) => {
        setSavedMovies(res.map(movieMapper));
      });
    }
  }, [loggedIn]);

  const signOut = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem(SEARCH_QUERY_LS_KEY);
    localStorage.removeItem(FILTER_LS_KEY);
    setSavedMovies([]);
    setLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  }, [navigate]);

  const tokenCheck = useCallback(() => {
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
          }
        })
        .catch((err) => {
          console.log(err);
          signOut();
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [signOut]);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  useEffect(() => {
    if (loggedIn) {
      const movies = localStorage.getItem("movies");
      if (movies) {
        setMovies(JSON.parse(movies));
      } else {
        moviesApi
          .getMovies()
          .then((res) => {
            setMovies(res);
            localStorage.setItem("movies", JSON.stringify(res));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [loggedIn]);

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
        setLoggedIn(true);
        tokenCheck();
      })
      .then(() => {
        navigate("/movies");
      })
      .catch((err) => {
        setresponseMessage(err);
      });
  };

  const updateUserInfo = ({ name, email }) => {
    return mainApi
      .editProfile(name, email)
      .then((userData) => {
        setCurrentUser(userData);
        setStatusMessage("Профиль успешно обновлен");
      })

      .catch((err) => {
        console.log(err);
        setStatusMessage("При обновлении профиля произошла ошибка");
      });
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies(savedMovies.concat(movieMapper(res)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (id) => {
    mainApi
      .deleteMovie(id)
      .then(() => {
        const indexToRemove = savedMovies.findIndex(
          (movie) => movie.savedId === id
        );
        if (indexToRemove >= 0) {
          const result = [
            ...savedMovies.slice(0, indexToRemove),
            ...savedMovies.slice(indexToRemove + 1),
          ];
          setSavedMovies(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SavedMoviesContext.Provider
      value={{
        savedMovies: savedMovies,
        saveMovie: handleSaveMovie,
        deleteMovie: handleDeleteMovie,
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <Routes>
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn} loading={loading}>
                  <Movies movies={movies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn} loading={loading}>
                  <SavedMovies movies={savedMovies} />
                </ProtectedRoute>
              }
            />
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
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn} loading={loading}>
                  <Profile
                    updateUserInfo={updateUserInfo}
                    signOut={signOut}
                    statusMessage={statusMessage}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Main isLogedin={loggedIn} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </SavedMoviesContext.Provider>
  );
}

export default App;
