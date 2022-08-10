import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={logo} alt="логотип" />
      </Link>
      <div className="header__link">
        <Link to="/signup" className="header__link-item">
          Регистрация
        </Link>
        <Link to="/signin" className="header__link-item">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
