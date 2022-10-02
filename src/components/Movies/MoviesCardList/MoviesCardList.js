import "./MoviesCardList.css";
import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useCurrentWidth } from "../../../hooks/useCurrentWidth";
import { getInitialCount, clickMoreMovies } from "../../../utils/MovieCount";

function MoviesCardList({ movies, savedPage, searchQuery }) {
  const width = useCurrentWidth();
  const [moviesCount, setmoviesCount] = useState(getInitialCount(width));
  const loadMore = () => {
    setmoviesCount((prev) => prev + clickMoreMovies(width));
  };

  if (searchQuery.length !== 0 && movies.length === 0) {
    return (
      <div className="card__not-found">
        "По вашему запросу ничего не найдено"
      </div>
    );
  }

  if (savedPage && movies.length === 0) {
    return <div className="card__not-found">"Нет сохранённых фильмов"</div>;
  }

  return (
    <section className="card__list">
      <div className="card__container">
        {movies.slice(0, moviesCount).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} savedPage={savedPage} />
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
