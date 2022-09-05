import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isLogedin }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={logo} alt="логотип" />
      </Link>
      <Navigation isLogedin={isLogedin} />
    </header>
  );
}

export default Header;
