import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="card__list">
      <div className="card__container">
        <MoviesCard />
        <MoviesCard IsMoviesSaved={true} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button type="button" className="card__more">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
