import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { movieMapper } from "../../utils/movieMapper";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [responseMessage, setresponseMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi.getSavedMovies().then((res) => {
      setSavedMovies(res.map(movieMapper));
    });
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

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
            navigate(location.pathname);
            setLoggedIn(true);
            setCurrentUser(userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    moviesApi.getMovies().then((res) => {
      setMovies(res);
      localStorage.setItem("movies", JSON.stringify(res));
    });
  }, []);

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

  const signOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie).then(() => {
      mainApi.getSavedMovies().then((res) => {
        setSavedMovies(res.map(movieMapper));
      });
    });
  };

  const handleDeleteMovie = (id) => {
    mainApi.deleteMovie(id).then(() => {
      mainApi.getSavedMovies().then((res) => {
        setSavedMovies(res.map(movieMapper));
      });
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
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies movies={movies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies movies={savedMovies} savedPage />
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
                <ProtectedRoute loggedIn={loggedIn}>
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
