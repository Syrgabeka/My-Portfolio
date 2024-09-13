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
          <h2>Frontend Developer from Kyrgyzstan</h2>
          <p>
            I am a Frontend developer with experience with modern frontend
            development technologies. I have deep knowledge in working with
            JavaScript, React, TypeScript, Redux Toolkit, as well as in
            developing applications using Next.js and Vite. Confident in using
            CSS/SCSS to create adaptive and responsive interfaces. Experienced
            with API integration through Axios and RTK Query. Actively use
            development efficiency tools such as Git and npm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
