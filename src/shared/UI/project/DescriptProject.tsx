import { FC } from "react";
import "./scss/descriptProject.scss";
import { ArrowUpRightIcon, GithubIcon } from "../../../assets/svgs";
import { projectsTypes } from "../../lib/types/type";

const DescriptProject: FC<projectsTypes> = ({
  stack,
  title,
  description,
  codeLink,
  demoLink,
}) => {
  return (
    <div className="pro__text">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="stack">
        {stack?.map((item, index) => (
          <p key={index + 1}>{item}</p>
        ))}
      </div>
      <div className="links">
        <a href={codeLink} target="_blank">
          Code
          <img className="icons" src={GithubIcon} alt="github__icon" />
        </a>
        <a href={demoLink} target="_blank">
          Live Demo
          <img className="icons__demo" src={ArrowUpRightIcon} alt="demoArrow" />
        </a>
      </div>
    </div>
  );
};

export default DescriptProject;
