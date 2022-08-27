import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme">
      <h2 className="section__title">Студент</h2>
      <div className="aboutme__profile">
        <h3 className="aboutme__profile-name">Александр</h3>
        <p className="aboutme__profile-proff">Веб-разработчик, 28 лет</p>
        <p className="aboutme__profile-about">
          Я родился на дальнем востоке, в 2012 переехал в Москву, окончил
          университет гражданской авиации. У меня есть любимая супруга. Я играю
          в регби и обожаю активный отдых. Недавно начал кодить. Теперь
          стремлюсь к новым знаниям в области IT
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
