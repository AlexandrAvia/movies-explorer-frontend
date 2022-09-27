import "./MoviesCard.css";
import image from "../../../images/film.svg";

function MoviesCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt={movie.nameRU}
      />
      <div className="card__description">
        <p className="card__description_title">{movie.nameRU}</p>
        <p className="card__description_duration">{movie.duration}</p>
      </div>
      {true ? (
        <button className="card__button-saved" />
      ) : (
        <button className="card__button-save">Сохранить</button>
      )}
    </div>
  );
}

export default MoviesCard;
