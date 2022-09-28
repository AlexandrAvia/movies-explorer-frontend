import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/validation";

function Register({ handleRegister, responseMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister({
      name: values.name,
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
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <fieldset className="form__fieldset">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            type="name"
            name="name"
            aria-label="Электронная почта"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={values.name || ""}
            required
          />
          <span className="form__error">{errors.name}</span>
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
            Зарегистрироваться
          </button>
          <p className="form__paragraph">
            Уже зарегистрированы?&ensp;
            <Link to="/signin" className="form__link">
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
