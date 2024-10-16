import { HealtChexk } from "../assets/projects";
import { projectsTypes } from "../shared/lib/types/type";
import DescriptProject from "../shared/UI/project/DescriptProject";
import ImgProject from "../shared/UI/project/ImgProject";
import "./scss/projectPage.scss";

const projects: projectsTypes[] = [
  {
    title: "Healtch Check ❤️‍🔥",
    description:
      "HealthCheck is a project designed to facilitate interaction between patients and doctors in today's digital world. HealthCheck provides a convenient way to join an online queue for consultations and examinations, which saves time and simplifies access to medical care. Patients can receive their exam results in an online format, see current hospital workload, view brief profiles of doctors, and read reviews from other patients. This makes the process more transparent and accessible to each user.",
    stack: ["TypeScript", "ReduxToolkit", "RestAPI"],
    codeLink: "",
    demoLink: "",
    image: HealtChexk,
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {projects.map(
        ({ title, description, stack, codeLink, demoLink, image }, index) => (
          <div
            className={`project__page ${index % 2 !== 0 ? "row__reverse" : ""}`}
            key={index + 1}
          >
            <DescriptProject
              stack={stack}
              title={title}
              description={description}
              codeLink={codeLink}
              demoLink={demoLink}
            />
            <ImgProject demoLink={demoLink} image={image} />
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsPage;
