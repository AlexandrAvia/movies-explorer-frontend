import "./FilterCheckbox.css";

function FilterCheckbox({ checked, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  }
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__deffault-hide" checked={checked} onChange={handleChange} />
      <span className="checkbox__slider" />
      <p className="checkbox__text">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
