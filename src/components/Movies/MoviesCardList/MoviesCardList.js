import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className="card__list">
      <div className="card__container">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button type="button" className="card__more">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
