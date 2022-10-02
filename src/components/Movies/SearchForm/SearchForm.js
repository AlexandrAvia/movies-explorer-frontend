import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

function SearchForm({
  searchQuery,
  setSearchQuery,
  onSubmit,
  checked,
  onCheckedChange,
  savedPage,
}) {
  const [errorState, setErrorState] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    if (!savedPage) {
      if (searchQuery.length === 0) {
        event.preventDefault();
        setErrorState("«Нужно ввести ключевое слово»");
      } else {
        setErrorState("");
      }
    }
  };

  return (
    <section className="search">
      <form className="search-form" onSubmit={onSubmit}>
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            placeholder="Фильм"
            onChange={handleInputChange}
            value={searchQuery}
          ></input>
          <button
            className="search-form__button"
            onClick={handleSubmit}
            type="submit"
          >
            Найти
          </button>
        </fieldset>
        <p className="search__error">{errorState}</p>
        <FilterCheckbox checked={checked} onChange={onCheckedChange} />
      </form>
    </section>
  );
}

export default SearchForm;
