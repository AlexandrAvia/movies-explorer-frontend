import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      {/* добавить ссылки на разделы */}
      <a className="navtab__link" href="#aboutproject">
        О проекте
      </a>
      <a className="navtab__link" href="#techs">
        Технологии
      </a>
      <a className="navtab__link" href="#aboutme">
        Студент
      </a>
    </section>
  );
}

export default NavTab;
