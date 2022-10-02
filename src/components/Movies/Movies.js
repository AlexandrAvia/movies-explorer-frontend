import "./Movies.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_MOVIE, FILTER_LS_KEY, SEARCH_QUERY_LS_KEY } from "../../constants/constants";

function Movies({ movies }) {
  const initialFilter = JSON.parse(localStorage.getItem(FILTER_LS_KEY)) || false;
  const [shortFilter, onCheckedChange] = useState(initialFilter);
  
  const initialQuery = localStorage.getItem(SEARCH_QUERY_LS_KEY) || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(initialQuery);

  useEffect(() => {
    localStorage.setItem(SEARCH_QUERY_LS_KEY, searchQuery);
    localStorage.setItem(FILTER_LS_KEY, shortFilter);
  }, [searchQuery, shortFilter]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(currentSearchQuery);
  };

  const filteredMovies = movies
    .filter((movie) =>
      searchQuery
        ? movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        : false
    )
    .filter((movie) => (shortFilter ? movie.duration <= SHORT_MOVIE : true));

  return (
    <>
      <Header isLogedin={true} />
      <SearchForm
        searchQuery={currentSearchQuery}
        setSearchQuery={setCurrentSearchQuery}
        onSubmit={onSubmit}
        checked={shortFilter}
        onCheckedChange={onCheckedChange}
        savedPage={false}
      />
      <MoviesCardList
        savedPage={false}
        movies={filteredMovies}
        searchQuery={searchQuery}
      />
      <Footer />
    </>
  );
}

export default Movies;
