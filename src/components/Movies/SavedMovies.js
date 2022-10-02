import "./Movies.css";
import { useState } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_MOVIE } from "../../constants/constants";

function Movies({ movies }) {
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [checked, onCheckedChange] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(currentSearchQuery);
  };

  const filteredMovies = movies
    .filter((movie) =>
      searchQuery
        ? movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
    .filter((movie) => (checked ? movie.duration <= SHORT_MOVIE : true));

  return (
    <>
      <Header isLogedin={true} />
      <SearchForm
        searchQuery={currentSearchQuery}
        setSearchQuery={setCurrentSearchQuery}
        onSubmit={onSubmit}
        checked={checked}
        onCheckedChange={onCheckedChange}
        savedPage
      />
      <MoviesCardList
        savedPage
        movies={filteredMovies}
        searchQuery={searchQuery}
      />
      <Footer />
    </>
  );
}

export default Movies;
