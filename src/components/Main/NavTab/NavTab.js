import "./NavTab.css";

function NavTab() {
  return (
    <div className="navtab">
      {/* добавить ссылки на разделы */}
      <a className="navtab__link">О проекте</a>
      <a className="navtab__link">Технологии</a>
      <a className="navtab__link">Студент</a>
    </div>
  );
}

export default NavTab;
