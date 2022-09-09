import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__title">404</div>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button type="button" className="not-found__button">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
