import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="register">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={logo} alt="логотип" />
      </Link>
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form">
        <fieldset className="form__fieldset">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            aria-label="Электронная почта"
            placeholder="pochta@yandex.ru"
            required
          />
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            aria-label="Пароль"
            placeholder="Пароль"
            minLength="4"
            maxLength="15"
            required
          />
          {/* <span className="form__error">Что-то пошло не так...</span> */}
        </fieldset>
      </form>
      <fieldset className="fieldset__button">
        <button type="button" className="form__save-button">
          Войти
        </button>
        <p className="form__paragraph">
          Ещё не зарегистрированы?&ensp;
          <Link to="/signin" className="form__link">
            Регистрация
          </Link>
        </p>
      </fieldset>
    </section>
  );
}

export default Login;
