import "./scss/aboutMePage.scss";
import Spiner from "../assets/img/spiner-pic.png";
import About from "../assets/img/about-pic.png";

const AboutMePage = () => {
  return (
    <div id="aboutMe" className="about__page">
      <div className="content">
        <div className="about__left">
          <img className="laptop__img" src={About} alt={"labtop"} />
          <span>
            <img className="about__spinner" src={Spiner} alt="spinner" />
          </span>
        </div>
        <div className="about__right">
          <h1>About me</h1>
          <h2>Experienced Full-Stack Developer from Kyrgyzstan</h2>
          <p>
            As a Full-Stack developer, my skill set covers a wide range of
            technologies, including ORM and CRM. My primary objective is to
            create and maintain responsive websites with a focus on delivering
            impeccable user experiences and ensuring robust Back-End security.
            My specialization lies in developing dynamic interfaces using clean
            and optimized code. I am also adept at employing cutting-edge
            development tools and adhering to advanced methodologies. My
            involvement in cross-functional teams is a pivotal factor that
            enables the creation of exceptional web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
