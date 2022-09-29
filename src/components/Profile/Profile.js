import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";

function Profile({ updateUserInfo, signOut }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const disabledButton =
    !isValid ||
    (values.name === currentUser.name && values.email === currentUser.email);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo(values);
  }
  return (
    <section>
      <Header isLogedin={true} />
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <fieldset className="profile__fieldset">
          <div className="profile__place">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              type="name"
              name="name"
              aria-label="Имя"
              placeholder="Имя"
              required
              value={values.name || ""}
              minLength={2}
              maxLength={30}
              onChange={handleChange}
            />
          </div>
          <span className="form__error">{errors.name}</span>
          <div className="profile__place">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              name="email"
              aria-label="Электронная почта"
              placeholder="pochta@yandex.ru"
              value={values.email || ""}
              required
              onChange={handleChange}
            />
          </div>
          <span className="form__error">{errors.email}</span>
          {/* <span className="profile__error">Что-то пошло не так...</span> */}
        </fieldset>
        <fieldset className="fieldset__button-profile">
          <button
            type="submit"
            disabled={disabledButton ? true : false}
            className={`profile__button ${
              !isValid && "profile__button_disabled"
            }`}
          >
            Редактировать
          </button>
          <button type="button" className="profile__button" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
