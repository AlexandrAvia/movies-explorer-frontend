import "./NotFound.css";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const goback = useNavigate();
  return (
    <section className="not-found">
      <div className="not-found__title">404</div>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => {
          goback(-3);
        }}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;
