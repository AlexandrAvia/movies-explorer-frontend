import "./Techs.css";

function Techs() {
  return (
    <div className="techs">
      <h2 className="section__title">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__card">
        <div className="techs__card-item">HTML</div>
        <div className="techs__card-item">CSS</div>
        <div className="techs__card-item">JS</div>
        <div className="techs__card-item">React</div>
        <div className="techs__card-item">Git</div>
        <div className="techs__card-item">Express.js</div>
        <div className="techs__card-item">MongoDB</div>
      </div>
    </div>
  );
}

export default Techs;
