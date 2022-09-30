import "./Movies.css";
import { useEffect, useState } from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, saved }) {
  const lskey = saved ? 'saved-search-query' : 'search-query';
  const initialQuery = localStorage.getItem(lskey) || '';
  const [currentSearchQuery, setCurrentSearchQuery] = useState(initialQuery);

  const filterlskey = saved ? 'saved-short-filter' : 'short-filter';
  const initialFilter = localStorage.getItem(filterlskey) || false;
  const [checked, onCheckedChange] = useState(initialFilter);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(initialQuery)
  }, []);

  useEffect(() => {
    localStorage.setItem(lskey, currentSearchQuery);
  }, [lskey, currentSearchQuery]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(currentSearchQuery);
  };

  return (
    <>
      <Header isLogedin={true} />
      <SearchForm
        searchQuery={currentSearchQuery}
        setSearchQuery={setCurrentSearchQuery}
        onSubmit={onSubmit}
        checked={checked}
        onCheckedChange={onCheckedChange} />
      <MoviesCardList movies={movies} searchQuery={searchQuery.toLowerCase()} filterShort={checked} />
      <Footer />
    </>
  );
}

export default Movies;
