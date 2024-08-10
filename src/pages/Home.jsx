import SitePhoto from "../assets/hero-page.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/CaseStudy";

import Answerables from "../assets/answerables/answerables-card.png";
import Baketomo from "../assets/mobile-game-card.png";
import StarInventory from "../assets/full-stack-card.png";
import PremiumCustom from "../assets/premium-custom-card.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const caseStudies = [
    {
      img: Baketomo,
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Baketomo",
      description:
        "Baketomo is a web browser game that takes insipiration from Pokemon and Neopets. Players can collect monsters, explore dungeons to expand their collection and buy items.",
    },
    {
      img: StarInventory,
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Star Inventory Logistics",
      description:
        "A CMS application for inventory management for small businesses. Organize your products, track sales and manage your inventory.",
    },
    {
      img: PremiumCustom,
      label: "GRAPHIC DESIGN",
      title: "Premier Custom Surfacing",
      description:
        "Designed, printed and wrapped 8 trucks and 1 trailer. Premium Custom Surfacing or Playsafe Canada specializes in rubberized pour-in surfaces.",
    },
    {
      img: Answerables,
      label: "GAME DEVELOPMENT",
      title: "Answerables",
      description:
        "An educational game for kids to learn math, science and english. Avatars are used to represent students as they explore worlds currated to the school curriculumn.",
    },
  ];

  return (
    <div className="home__container flex-wrap flex-row text-center justify-center items-center">
      <section className="flex flex-col pt-24 mx-1 items-center justify-center space-x-12 lg:flex-row xl:mx-96">
        <div>
          <h1 className="font-bold text-[50px] text-black md:leading-[75px] md:text-[75px] md:text-center">
            Arkaw <span className="text-[#3a7ca5]">Banerjee</span>
          </h1>
          <p className="text-black my-4 text-xl 2xl:mx-auto md:mt-11 2xl:text-[35px] 2xl:leading-10 md:text-center">
            I'm a{" "}
            <Link to="web-dev" className="text-[#3a7ca5]">
              Full Stack Web Developer
            </Link>
            ,{" "}
            <Link to="graphic-design" className="text-[#3a7ca5]">
              Graphic Designer
            </Link>
            , and{" "}
            <Link to="illustrations" className="text-[#3a7ca5]">
              Game Developer
            </Link>
            .
          </p>
          <p className="text-black my-4 text-xl  2xl:mx-auto md:mt-6 2xl:text-[35px] 2xl:leading-10 md:text-center">
            I specialize in creating responsive websites and applications.
          </p>
          <div className="flex flex-col justify-center mx-auto">
            <img
              src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb"
              alt="My Skills"
              className="w-96 mx-auto mt-4"
            />
            <div className="my-8 flex flex-row justify-center items-center mx-auto">
              <p>Connect with me on</p>
              <button
                onClick={goToLinkedIn}
                className="[background:#2f6690] rounded-[10px] text-[#d9dcd6] h-[40px] w-[100px] mx-2 lg:float-start font-bold"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <img
          src={SitePhoto}
          alt="picture of profile"
          className="sitePhoto fixed xl:relative lg:w-[600px] invisible xl:visible"
        />
      </section>

      <section className="mx-2 md:mx-24 xl:py-16 xl:mx-36 2xl:mx-96">
        <h1 className="text-4xl my-4 xl:border-t-2 xl:border-gray pt-8 px-12 sm:text-center sm:mx-auto sm:px-0 text-[#16425b] md:h-full md:w-full md:my-8 md:visible 2xl:text-[60px] md:text-5xl font-bold">
          Work
        </h1>
        <div className="case-studies overflow-hidden flex flex-col flex-wrap md:flex-row justify-center">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              img={
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-[200px] h-[200px] lg:w-[500px] lg:h-[350px] rounded-[10px] shadow-md md:shadow-lg"
                />
              }
              label={
                <label className="relative top-4 text-[12px] tracking-wider">
                  {study.label}
                </label>
              }
              title={study.title}
              description={study.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
