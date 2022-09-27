import "./MoviesCard.css";

function MoviesCard({ movie }) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }
  return (
    <div className="card">
      <a href={movie.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="card__image"
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className="card__description">
        <p className="card__description_title">{movie.nameRU}</p>
        <p className="card__description_duration">
          {getTimeFromMins(movie.duration)}
        </p>
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
