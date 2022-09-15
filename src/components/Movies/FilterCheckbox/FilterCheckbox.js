import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__deffault-hide" />
      <span className="checkbox__slider" />
      <p className="checkbox__text">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
