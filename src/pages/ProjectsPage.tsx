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
    image: "src/assets/projects/elchocrud.png",
  },
  {
    title: "Eco Movie 🐬",
    description:
      "EcoMovie - a unique website providing fascinating information about movies and TV shows. Here you can discover all the necessary details about your favorite films, actors, directors, ratings, and much more.",
    stack: ["NextJS", "TypeScript", "ReduxToolkit", "RestAPI"],
    codeLink: "https://github.com/Elkhan2003/eco-movie",
    demoLink: "https://ecomovie.life/",
    image: "src/assets/projects/eco-movie.png",
  },
  {
    title: "WeDevX Selenium 🐬",
    description:
      "WeDevX Selenium was specifically created for SDET students to help them refine their skills in working with Selenium.",
    stack: ["NextJS", "TypeScript", "Material UI"],
    codeLink: "https://github.com/Elkhan2003/Selenium",
    demoLink: "https://demo-project.wedevx.co/",
    image: "src/assets/projects/wedevx-selenium.png",
  },
  {
    title: "Ortodont Group 🪙",
    description:
      "The Ortodont Group website is the website of the Ortodont Group dental clinic. On the website, you can find information about the clinic, the services it provides, and also make an appointment.",
    stack: ["NextJS", "TypeScript", "SCSS", "RestAPI"],
    codeLink: "https://github.com/Elkhan2003/Next-Dentist",
    demoLink: "https://next-dentist911.vercel.app/",
    image: "src/assets/projects/ortodont-group.png",
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
