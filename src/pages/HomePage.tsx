import MyGreeting from "../shared/UI/profile/MyGreeting";
import MyImg from "../shared/UI/profile/MyImg";
import TechStack from "../shared/UI/profile/TechStack";
import "./scss/homePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="home__top" id="home">
        <MyGreeting />
        <MyImg />
      </div>
      <TechStack />
    </div>
  );
};

export default HomePage;
