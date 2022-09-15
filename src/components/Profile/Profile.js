import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section>
      <Header isLogedin={true} />
      <form className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <fieldset className="profile__fieldset">
          <div className="profile__place">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              type="name"
              name="name"
              aria-label="Имя"
              placeholder="Виталий"
              required
            />
          </div>
          <div className="profile__place">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              name="email"
              aria-label="Электронная почта"
              placeholder="pochta@yandex.ru"
              required
            />
          </div>
          {/* <span className="profile__error">Что-то пошло не так...</span> */}
        </fieldset>
      </form>
      <fieldset className="fieldset__button-profile">
        <button type="button" className="profile__button">
          Редактировать
        </button>
        <button type="button" className="profile__button">
          Выйти из аккаунта
        </button>
      </fieldset>
    </section>
  );
}

export default Profile;
