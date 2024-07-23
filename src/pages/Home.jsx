import SitePhoto from "../assets/hero-page.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/CaseStudy";

import Answerables from "../assets/answerables-card.png";
import Baketomo from "../assets/mobile-game-card.png";
import StarInventory from "../assets/full-stack-card.png";
import SoldBig from "../assets/graphic-design-card.png";
import PremiumCustom from "../assets/premium-custom-card.png"

const Home = () => {
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const caseStudies = [
    {
      img: { Baketomo },
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Baketomo",
      description:
        "Baketomo is a web browser game that takes insipiration from Pokemon and Neopets. Players can collect monsters, explore dungeons to expand their collection and buy items.",
    },
    {
      img: { StarInventory },
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Star Inventory Logistics",
      description:
        "A CMS application for inventory management for small businesses. Organize your products, track sales and manage your inventory.",
    },
    {
      img: { SoldBig },
      label: "GRAPHIC DESIGN",
      title: "SoldBig Realty",
      description:
        "Designed and printed 10, 000 brochures for SoldBig Realty to help promote their real estate brand. SoldBig Realty is a real estate firm that operates in the GTA.",
    },
    {
      img: { PremiumCustom },
      label: "GRAPHIC DESIGN",
      title: "Premier Custom Surfacing",
      description:
        "Designed, printed and wrapped 8 trucks and 1 trailer. Premium Custom Surfacing or Playsafe Canada specializes in rubberized pour-in surfaces.",
    },
    {
      img: { Answerables },
      label: "GAME DEVELOPMENT",
      title: "Answerables",
      description:
        "An educational game for kids to learn math, science and english. Avatars are used to represent students as they explore worlds currated to the school curriculumn.",
    },
  ];

  return (
    <div className="home__container flex-wrap flex-row text-center justify-center items-center">
      <Navbar />
      <div className="flex flex-col pt-24 mx-auto items-center justify-center space-x-12 md:flex-row md:mx-96">
        <div className="">
          <h1 className="text-3xl font-bold text-black md:text-[75px] md:text-center">
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
                className="[background:#2f6690] rounded-[10px] text-[#d9dcd6] h-[40px] w-[100px] mx-2 lg:float-start"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={SitePhoto}
            alt="picture of profile"
            className="sitePhoto flex-shrink-0 h-[0px] md:h-[500px] md:w-[900px] invisible md:visible"
          />
        </div>
      </div>

      <hr
        className="invisible md:visible md:mx-auto md:mt-12 md:w-full"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>

      <div className="md:mx-96">
        <h1 className="invisible w-0 h-0 px-24 md:text-[#16425b] md:h-full md:w-full md:my-8 md:visible md:text-left md:text-5xl md:font-bold">
          Case Studies
        </h1>
        <div className="case-studies overflow-hidden flex flex-col flex-wrap md:flex-row justify-center">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              img={
                study.img && (
                  <img
                    src={Object.values(study.img)}
                    alt={study.title}
                    className="w-[200px] h-[200px] md:w-[500px] md:h-[350px] rounded-[10px]"
                  />
                )
              }
              label={
                study.label && (
                  <label className="relative top-4 text-[12px] tracking-wider">
                    {study.label}
                  </label>
                )
              }
              title={study.title}
              description={study.description}
            />
          ))}
        </div>
      </div>

      <hr
        className="visible mt-12 md:mx-auto md:mt-12 md:w-full"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>
      <Footer />
    </div>
  );
};

export default Home;
