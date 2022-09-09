import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form">
      <div className="form__container">
        <h2 className="form__title">Регистрация</h2>
        <form className="form__form">
          <div className="form__fieldset">
            <input
              className="form__input"
              type="name"
              name="name"
              aria-label="Электронная почта"
              placeholder="Виталий"
              required
            />
            <input
              className="form__input"
              type="email"
              name="email"
              aria-label="Электронная почта"
              placeholder="pochta@yandex.ru|"
              required
            />
          </div>
          <div className="form__fieldset">
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
            <span className="popup__error proffesion-error" />
          </div>
          <button type="button" className="form__save-button">
            Зарегистрироваться
          </button>
        </form>
        <p className="form__paragraph">
          Уже зарегистрированы?&ensp;
          <Link to="/sign-in" className="form__link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
