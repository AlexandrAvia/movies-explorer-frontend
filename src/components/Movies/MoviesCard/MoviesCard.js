import "./MoviesCard.css";
import { useContext } from "react";
import { SavedMoviesContext } from "../../../contexts/SavedMoviesContext";

function MoviesCard({ movie, savedPage }) {
  const savedMoviesContext = useContext(SavedMoviesContext);
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }

  const handleSaveMovie = () => {
    savedMoviesContext.saveMovie(movie);
  };

  const handleDeleteMovie = () => {
    savedMoviesContext.deleteMovie(
      savedMoviesContext.savedMovies.find(
        (savedMovie) => savedMovie.id === movie.id
      ).savedId
    );
  };

  return (
    <div className="card">
      <a href={movie.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="card__image"
          src={
            movie.image.url.startsWith("http")
              ? movie.image.url
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.nameRU}
        />
      </a>
      <div className="card__description">
        <p className="card__description_title">{movie.nameRU}</p>
        <p className="card__description_duration">
          {getTimeFromMins(movie.duration)}
        </p>
      </div>
      {savedPage ? (
        <button onClick={handleDeleteMovie} className="card__button-delete" />
      ) : savedMoviesContext.savedMovies
          .map((movie) => movie.id)
          .includes(movie.id) ? (
        <button onClick={handleDeleteMovie} className="card__button-saved" />
      ) : (
        <button onClick={handleSaveMovie} className="card__button-save">
          Сохранить
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
