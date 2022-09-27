import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies }) {
  return (
    <>
      <Header isLogedin={true} />
      <SearchForm />
      <MoviesCardList movies={movies} />
      <Footer />
    </>
  );
}

export default Movies;
