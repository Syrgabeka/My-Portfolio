import { FC } from "react";
import "./scss/imgPoject.scss";
import { projectsTypes } from "../../lib/types/type";

const ImgProject: FC<projectsTypes> = ({ demoLink, image }) => {
  return (
    <div className="pro__img">
      <a href={demoLink} target="_blank">
        <img src={image} alt="project" />
      </a>
    </div>
  );
};

export default ImgProject;
