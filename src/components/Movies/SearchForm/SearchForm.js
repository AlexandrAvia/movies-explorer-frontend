import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ searchQuery, setSearchQuery, onSubmit, checked, onCheckedChange }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
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
          <button className="search-form__button" type="submit">
            Найти
          </button>
        </fieldset>
        <FilterCheckbox checked={checked} onChange={onCheckedChange} />
      </form>
    </section>
  );
}

export default SearchForm;
