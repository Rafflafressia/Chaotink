import { useEffect } from "react";

import Bamboo from "../../assets/bamboo-homepage.png";
import JATE from "../../assets/JATE-application.png";
import MERN from "../../assets/MERN-application.png";
import PWGen from "../../assets/password-generator.png";
import StarInv from "../../assets/star-inventory-logistics.png";
import WeatherAPI from "../../assets/weather-api.png";
import GithubIcon from "../../assets/github-icon.svg";
import DeploymentIcon from "../../assets/deployed-icon.svg";

const icon = {
  github: GithubIcon,
  deployment: DeploymentIcon,
};

const fullStackProjects = [
  {
    title: `Bamboo Lyric Search Engine`,
    description:
      "A lyric app search engine that uses two APIs to find lyrics and album art. It also provides a link to the song on Spotify.",
    imageUrl: Bamboo,
    githubURL: "https://github.com/Rafflafressia/bamboo-lyric-search-app",
    deploymentURL: "https://rafflafressia.github.io/bamboo-lyric-search-app/",
  },
  {
    title: "Just Another Text Editor (JATE)",
    description:
      "A charming PWA application that allows users to write and save notes with persistence.",
    imageUrl: JATE,
    githubURL: "https://github.com/Rafflafressia/take-notes-netizens",
    deploymentURL: "https://take-notes-netizens.onrender.com",
  },
  {
    title: "MERN Stack Book Search Engine",
    description:
      "A robus book search engine using the google book API that lets users save books to their profile.",
    imageUrl: MERN,
    githubURL: "https://github.com/Rafflafressia/MERN-Book-Search",
    deploymentURL: "https://mern-book-search-4rso.onrender.com",
  },
  {
    title: "Need a password? Have a password generator!",
    description:
      "A fun little password generator that creates a random password based on user input.",
    imageUrl: PWGen,
    githubURL:
      "https://github.com/Rafflafressia/random-password-generatorLinks to an external site.",
    deploymentURL: "https://rafflafressia.github.io/random-password-generator/",
  },
  {
    title: "Easy to use inventory management system.",
    description:
      "My eventual claim to millions as I create the easiest inventory management system ever.",
    imageUrl: StarInv,
    githubURL: "https://github.com/Rafflafressia/Star-Inventory-Logistics",
    deploymentURL:
      "https://star-inventory-logistics-36c6a2954dc4.herokuapp.com/login",
  },
  {
    title: "Need the weather? Don't use Widgets, use APIs!",
    description:
      "A weather app that uses the OpenWeather API to get the current weather for a city. It also saves the search history.",
    imageUrl: WeatherAPI,
    githubURL: "https://github.com/Rafflafressia/weather-forecast-app",
    deploymentURL: "https://rafflafressia.github.io/weather-forecast-app/",
  },
];

const FullStackDevelopmentCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-24 lg:mx-32 xl:mx-72">
      <div className="flex flex-col justify-center items-start space-y-4">
        <h1 className="text-[#16425b] text-4xl md:text-5xl font-bold">
          Full Stack
          <span className="text-[#2F6690]"> Web Development</span>
        </h1>
        <p className="text-[#2F6690] border-t-2 border-gray p-8 md:text-lg">
          The following is a collection of applications I've built while
          attending University of Toronto. The applications demonstrate not only
          a progressional growth as a full stack developer but also the ability
          to learn and adapt to new technologies. Please feel free to click on
          either the github or deployment links to view the code or the
          application itself.
        </p>
      </div>

      <div className="flex flex-row flex-wrap space-y-4 xl:space-x-4">
        {fullStackProjects.map((project, index) => (
          <div
            key={index}
            className="full-stack-development-card flex items-center justify-center xl:justify-start my-4 space-x-2 border-t-2 border-gray py-4"
          >
            <img
              src={project && project.imageUrl}
              alt={project && project.title}
              className="invisible fixed md:relative md:visible md:w-5/12 p-2 shrink-1 shadow-md bg-slate-100"
            />
            <div className="projDesc flex flex-col space-y-4 p-4">
              <h3 className="text-[#16425b] text-2xl font-bold">
                {project && project.title}
              </h3>
              <p className="text-[#16425b] text-md">
                {project && project.description}
              </p>
              <div className="flex flex-row justify-start items-center space-x-4 text-sm">
                <a
                  href={project.githubURL}
                  className="flex flex-row p-2 bg-black text-white space-x-4 items-center justify-center [background:#2f6690]"
                >
                  <p>GitHub Repo</p>{" "}
                  <img src={icon.github} className="w-[30px]" />
                </a>

                <a
                  href={project.deploymentURL}
                  className="flex flex-row p-2 bg-black text-white space-x-4 items-center justify-center [background:#2f6690]"
                >
                  <p>Deployment Link</p>{" "}
                  <img src={icon.deployment} className="w-[30px]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullStackDevelopmentCards;
