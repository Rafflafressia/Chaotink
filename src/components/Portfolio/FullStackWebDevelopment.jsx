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
  return (
    <section className="m-8 [background:#D9DCD6] p-4 rounded-lg shadow-lg lg:mx-32 xl:mx-72">
      <div className="flex flex-col justify-center items-start space-y-4">
        <h1 className="text-[#16425b] text-4xl md:text-5xl font-bold">
          Full Stack
          <span className="text-[#2F6690]"> Web Development</span>
        </h1>
        <p className="text-[#2F6690] border-t-2 border-[#B9BAB7] border-b-2 p-8 md:text-lg">
          The following is a collection of applications I've built while
          attending University of Toronto. The applications demonstrate not only
          a progressional growth as a full stack developer but also the ability
          to learn and adapt to new technologies. Please feel free to click on
          either the github or deployment links to view the code or the
          application itself.
        </p>
      </div>

      <span className="border-b-[1px]"></span>

      {fullStackProjects.map((project, index) => (
        <div
          key={index}
          className="full-stack-development-card flex my-4 space-x-2 [background:#b9bab7] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#16425b] rounded-2xl"
        >
          <div className="projImg flex fixed md:relative p-4 lg:w-[450px] md:w-11/12 w-full">
            <img
              src={project && project.imageUrl}
              alt={project && project.title}
              className="invisible w-0 md:visible md:w-full md:h-auto md:object-cover p-4"
            />
          </div>
          <div className="projDesc flex flex-col">
            <h3 className="text-[#16425b] text-2xl font-bold my-4 ml-2">
              {project && project.title}
            </h3>
            <p className="text-[#16425b] font-bold text-xl mx-2">
              {project && project.description}
            </p>
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
