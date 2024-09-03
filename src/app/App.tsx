import { FC } from "react";
import "./theme.scss";
import HomePage from "../pages/HomePage";
import AboutMePage from "../pages/AboutMePage";
import ProjectsPage from "../pages/ProjectsPage";
import Menu from "../shared/UI/menu/Menu";

const App: FC = () => {
  return (
    <div className="container">
      <Menu />
      <div className="component-container">
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
      </div>
    </div>
  );
};

export default App;
