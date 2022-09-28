import "./MoviesCardList.css";
import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useCurrentWidth } from "../../../hooks/useCurrentWidth";
import { getInitialCount, clickMoreMovies } from "../../../utils/MovieCount";

function MoviesCardList({ movies }) {
  const width = useCurrentWidth();
  const [moviesCount, setmoviesCount] = useState(getInitialCount(width));
  const loadMore = () => {
    setmoviesCount((prev) => prev + clickMoreMovies(width));
  };
  return (
    <section className="card__list">
      <div className="card__container">
        {movies.slice(0, moviesCount).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
      {moviesCount < movies.length && (
        <button onClick={loadMore} type="button" className="card__more">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
