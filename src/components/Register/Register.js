import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={logo} alt="логотип" />
      </Link>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form">
        <fieldset className="form__fieldset">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            type="name"
            name="name"
            aria-label="Электронная почта"
            placeholder="Виталий"
            required
          />
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
            value="password"
            minLength="4"
            maxLength="15"
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </fieldset>
      </form>
      <fieldset className="fieldset__button">
        <button type="button" className="form__save-button">
          Зарегистрироваться
        </button>
        <p className="form__paragraph">
          Уже зарегистрированы?&ensp;
          <Link to="/signin" className="form__link">
            Войти
          </Link>
        </p>
      </fieldset>
    </section>
  );
}

export default Register;
