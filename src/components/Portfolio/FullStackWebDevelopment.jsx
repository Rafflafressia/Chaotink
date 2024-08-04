import Bamboo from "../assets/bamboo-homepage.png";
import JATE from "../assets/JATE-application.png";
import MERN from "../assets/MERN-application.png";
import PWGen from "../assets/password-generator.png";
import StarInv from "../assets/star-inventory-logistics.png";
import WeatherAPI from "../assets/weather-api.png";
import GithubIcon from "../assets/github-icon.svg";
import DeploymentIcon from "../assets/deployed-icon.svg";
import BackButton from "../components/BackButton";

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
  return (
    <section className="mx-auto my-2 flex flex-col p-4 contain-content w-[400px] [background:#404040] lg:w-[1240px] lg:h-full border-b border-slate-600 rounded-2xl">
      <BackButton />
      <div className="flex flex-row justify-center px-4 mb-4">
        <h1 className="text-white text-right text-2xl font-bold mt-6">
          Full
          <span className="text-[#36DCA0]"> Stack</span>
        </h1>
        <span className="border-r-2 mx-4 pl-2"></span>
        <p className="text-white">
          A Collection of applications designed and deployed on GitHub through
          the UofT Full stack development bootcamp
        </p>
      </div>

      <span className="border-b-[1px]"></span>

      {fullStackProjects.map((project, index) => (
        <div
          key={index}
          className="full-stack-development-card flex my-4 space-x-2 [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2A7358] rounded-2xl"
        >
          <div className="projImg flex ">
            <img
              src={project && project.imageUrl}
              alt={project && project.title}
              className="invisible w-0 md:visible md:w-[350px] p-4"
            />
          </div>
          <div className="projDesc flex flex-col">
            <h3 className="text-white text-2xl font-bold my-4 ml-2">
              {project && project.title}
            </h3>
            <p className="text-white mx-2">{project && project.description}</p>
            <div className="flex flex-row justify-start items-center">
              <button>
                <a href={project.githubURL}>
                  <img src={icon.github} className="w-[30px] mx-2 py-6" />
                </a>
              </button>
              <button>
                <a href={project.deploymentURL}>
                  <img src={icon.deployment} className="w-[30px] mx-2 py-6" />
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FullStackDevelopmentCards;
