import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutproject" id="aboutproject">
      <h2 className="section__title">О проекте</h2>
      <div className="aboutproject__description">
        <div className="aboutproject__description-container">
          <h3 className="aboutproject__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutproject__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutproject__description-container">
          <h3 className="aboutproject__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutproject__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__timeline">
        <p className="aboutproject__timeline-one">1 неделя</p>
        <p className="aboutproject__timeline-four">4 недели</p>
      </div>
      <div className="aboutproject__timeline-description">
        <p className="aboutproject__timeline-description-back">Back-end</p>
        <p className="aboutproject__timeline-description-front">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
