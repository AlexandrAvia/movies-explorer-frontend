import "./MoviesCard.css";
import image from "../../../images/film.svg";

function MoviesCard({ IsMoviesSaved }) {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="Обложка фильма" />
      <div className="card__description">
        <p className="card__description_title">
          Пи Джей Харви: A dog called money
        </p>
        <p className="card__description_duration">1ч 17м</p>
      </div>
      {IsMoviesSaved ? (
        <button className="card__button-saved" />
      ) : (
        <button className="card__button-save">Сохранить</button>
      )}
    </div>
  );
}

export default MoviesCard;
