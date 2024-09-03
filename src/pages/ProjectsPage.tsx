import { Ecomovie, Elchocrund } from "../assets/projects";
import { projectsTypes } from "../shared/lib/types/type";
import DescriptProject from "../shared/UI/project/DescriptProject";
import ImgProject from "../shared/UI/project/ImgProject";
import "./scss/projectPage.scss";

const projects: projectsTypes[] = [
  {
    title: "Elcho Crud ❤️‍🔥",
    description:
      "The ElchoCrud project was created specifically for those people who are just starting to immerse themselves in the IT world, especially in Frontend and Mobile Development. This project is a full-fledged backend with flexible capabilities for creating tables and a complete database. Users can create their own endpoints and data tables.",
    stack: [
      "NextJS",
      "TypeScript",
      "ReduxToolkit",
      "Express",
      "Prisma-ORM",
      "Supabase",
      "RestAPI",
    ],
    codeLink: "https://elchocrud.pro/",
    demoLink: "https://elchocrud.pro/",
    image: Elchocrund,
  },
  {
    title: "Eco Movie 🐬",
    description:
      "EcoMovie - a unique website providing fascinating information about movies and TV shows. Here you can discover all the necessary details about your favorite films, actors, directors, ratings, and much more.",
    stack: ["NextJS", "TypeScript", "ReduxToolkit", "RestAPI"],
    codeLink: "https://github.com/Elkhan2003/eco-movie",
    demoLink: "https://ecomovie.life/",
    image: Ecomovie,
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
