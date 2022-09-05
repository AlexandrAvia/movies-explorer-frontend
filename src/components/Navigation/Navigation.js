import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/acc-logo.svg";

function Navigation({ isLogedin }) {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  function openMenu() {
    setIsOpenBurger(true);
  }

  function closeMenu() {
    setIsOpenBurger(false);
  }
  return (
    <nav>
      {isLogedin ? (
        <>
          <div className="navigation__links">
            <div className="navigation__film-links">
              <Link to="/movies" className="navigation__film-link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="navigation__film-link">
                Сохраненные фильмы
              </Link>
            </div>
            <Link to="/profile" className="navigation__account">
              <img className="account__logo" src={logo} alt="иконка аккаунта" />
              <div className="navigation__account-link">Аккаунт</div>
            </Link>
          </div>
          <button
            type="button"
            className="navigation__burger-menu"
            onClick={openMenu}
          />
          <div
            className={`burger-menu ${isOpenBurger && "burger-menu_opened"}`}
          >
            <div className="burger-menu__container">
              <button
                type="button"
                className="burger-menu__close-btn"
                onClick={closeMenu}
              />
              <div className="burger-menu__links">
                <Link to="/">Главная</Link>
                <Link to="/movies">Фильмы</Link>
                <Link to="/saved-movies">Сохраненные фильмы</Link>
              </div>
              <Link to="/profile" className="burger-menu__link-account">
                Аккаунт
                <img
                  className="navigation_profile-icon"
                  alt="иконка аккаунта."
                />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="navigation__link">
          <Link to="/signup" className="navigation__link-item">
            Регистрация
          </Link>
          <Link to="/signin" className="navigation__link-item">
            Войти
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
