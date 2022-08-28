import "./AboutMe.css";
import studentPhoto from "../../../images/student.JPG";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="section__title">Студент</h2>
      <div className="aboutme__column">
        <div className="aboutme__profile">
          <h3 className="aboutme__profile-name">Александр</h3>
          <p className="aboutme__profile-proff">Веб-разработчик, 28 лет</p>
          <p className="aboutme__profile-about">
            Я родился на дальнем востоке, в 2012 переехал в Москву, окончил
            университет гражданской авиации. У меня есть любимая супруга. Я
            играю в регби и обожаю активный отдых. Недавно начал кодить. Теперь
            стремлюсь к новым знаниям в области IT
          </p>
          <ul className="aboutme__profile__links">
            <li>
              <a
                className="aboutme__profile__link"
                href="https://vk.com/id44586568"
                target="_blank"
                rel="noreferrer"
              >
                Вконтакте
              </a>
            </li>
            <li>
              <a
                className="aboutme__profile__link"
                href="https://github.com/AlexandrAvia"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="aboutme__profile__photo"
          src={studentPhoto}
          alt="фотография студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
