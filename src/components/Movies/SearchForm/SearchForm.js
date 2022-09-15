import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            placeholder="Фильм"
            required
          ></input>
          <button className="search-form__button" type="button">
            Найти
          </button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
