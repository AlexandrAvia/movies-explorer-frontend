import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/validation";

function Login({ handleLogin, responseMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password,
    });
    setDisabled(true);
    return !isValid;
  }
  return (
    <section className="register">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={logo} alt="логотип" />
      </Link>
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            aria-label="Электронная почта"
            placeholder="pochta@yandex.ru"
            required
            onChange={handleChange}
            value={values.email || ""}
          />
          <span className="form__error">{errors.email}</span>
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
            onChange={handleChange}
            value={values.password || ""}
          />
          <span className="form__error">{errors.password}</span>
        </fieldset>
        <fieldset className="fieldset__button">
          <p className="form__error">{responseMessage}</p>
          <button
            type="submit"
            disabled={!isValid}
            className={`form__save-button ${
              !isValid && "form__save-button_disabled"
            }`}
          >
            Войти
          </button>
          <p className="form__paragraph">
            Ещё не зарегистрированы?&ensp;
            <Link to="/signup" className="form__link">
              Регистрация
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
