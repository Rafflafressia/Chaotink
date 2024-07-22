import SitePhoto from "../assets/hero-page.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CaseStudyOne from "../components/Case Studies/BaketomoInfoPage";
import CaseStudyTwo from "../components/Case Studies/BaketomoInfoPage";
import CaseStudyThree from "../components/Case Studies/BaketomoInfoPage";
import CaseStudyFour from "../components/Case Studies/BaketomoInfoPage";

const Home = () => {
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const Divider = () => {
    return (
      <hr
        className="visible w-full mx-auto md:invisible md:w-0 md:h-0"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>
    );
  };

  return (
    <div className="home__container flex-wrap flex-row text-center justify-center items-center">
      <Navbar />
      <div className="flex flex-col pt-24 mx-auto items-center justify-center space-x-12 md:space-x-4 2xl:space-x-[200px] md:flex-row">
        <div className="">
          <h1 className="text-3xl font-bold text-black md:text-[75px] md:flex md:flex-col md:text-left">
            Arkaw <span className="text-[#3a7ca5] mt-8">Banerjee</span>
          </h1>
          <p className="text-black my-4 text-xl md:w-[500px] 2xl:w-[500px] 2xl:mx-auto md:mt-11 2xl:text-[35px] 2xl:leading-10 md:text-left">
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
              Illustrator
            </Link>
            .
          </p>
          <p className="text-black my-4 text-xl md:w-[500px] 2xl:w-[500px] 2xl:mx-auto md:mt-11 2xl:text-[35px] 2xl:leading-10 md:text-left">
            I specialize in creating responsive websites and applications
          </p>
          <img
            src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb"
            alt="My Skills"
            className="pt-5 px-5 w-96 mx-auto lg:mx-0"
          />
          <button
            onClick={goToLinkedIn}
            className="[background:#2f6690] rounded-[10px] text-[#d9dcd6] h-[40px] w-[100px] my-4 mx-2 lg:float-start"
          >
            LinkedIn
          </button>
        </div>
        <div>
          <img
            src={SitePhoto}
            alt="picture of profile"
            className="sitePhoto h-[5px] sm:h-[100px] md:h-[500px] 2xl:h-[650px] invisible md:visible md:flex"
          />
        </div>
      </div>

      <hr
        className="invisible md:visible md:mx-auto md:mt-12 md:w-full"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>

      <div className="case-studies flex flex-col md:flex-row md:space-x-3 mx-auto justify-center flex-wrap">
        <div className="study-one mt-24 md:mt-4">
          <Divider />
          <h1 className="text-3xl text-left pl-3 pt-4 visible md:invisible md:w-0 md:h-0">
            <strong>Case:</strong> Baketomo
          </h1>
          <div className="flex space-x-4 justify-center items-center mx-auto mt-4">
            <div className="bg-slate-400 w-[200px] h-[200px] md:w-[600px] md:h-[500px]"></div>
            <p className="w-[200px] h-[200px] visible md:invisible md:w-0 md:h-0">
              Baketomo is a game that I worked on at university of Toronto. As a
              capstone project. The game features capturing monsters, going into
              dungeons and buying items from a shop. <br></br> <br></br>
              <span className="text-blue-500">
                Click here to learn more about the project.
              </span>
            </p>
          </div>
        </div>

        <div className="study-two mt-24 md:mt-4">
          <Divider />
          <h1 className="text-3xl text-left pl-3 pt-4 visible md:invisible md:w-0 md:h-0">
            <strong>Case:</strong> Star Inventory Logistics
          </h1>
          <div className="flex space-x-4 justify-center items-center mx-auto mt-4">
            <div className="bg-slate-400 w-[200px] h-[200px] md:w-[600px] md:h-[500px]"></div>
            <p className="w-[200px] h-[200px] visible md:invisible md:w-0 md:h-0">
              Star Inventory Logistics is a CMS software right out of the web
              browser. This let's clients keep track of inventory and
              dynamically calculate prices for clients. <br></br> <br></br>
              <span className="text-blue-500">
                Click here to learn more about the project.
              </span>
            </p>
          </div>
        </div>

        <div className="invisible md:visible study-two mt-24 md:mt-4">
          <Divider />
          <h1 className="text-3xl text-left pl-3 pt-4 visible md:invisible md:w-0 md:h-0">
            <strong>Case:</strong> Buddy Double
          </h1>
          <div className="flex space-x-4 justify-center items-center mx-auto mt-4">
            <div className="bg-slate-400 w-[200px] h-[200px] md:w-[600px] md:h-[500px]"></div>
            <p className="w-[200px] h-[200px] visible md:invisible md:w-0 md:h-0">
              Buddy Double is a productivity application right out of the web
              browser targeted towards neurodivergent users. Buddy Double gives
              users access to study groups and one-on-one matchmaking systems to
              help users stay on track. <br></br> <br></br>
              <span className="text-blue-500">
                Click here to learn more about the project.
              </span>
            </p>
          </div>
        </div>

        <div className="study-two mt-24 md:mt-4">
          <Divider />
          <h1 className="text-3xl text-left pl-3 pt-4 visible md:invisible md:w-0 md:h-0">
            <strong>Case:</strong> Bamboo Music
          </h1>
          <div className="flex space-x-4 justify-center items-center mx-auto mt-4">
            <div className="bg-slate-400 w-[200px] h-[200px] md:w-[600px] md:h-[500px]"></div>
            <p className="w-[200px] h-[200px] visible md:invisible md:w-0 md:h-0">
              My innovation on a music streaming platform. The idea is that a
              user can look up a song with lyrics and a video. <br></br>{" "}
              <br></br>
              <span className="text-blue-500">
                Click here to learn more about the project.
              </span>
            </p>
          </div>
        </div>
      </div>

      <hr
        className="invisible md:visible md:mt-12 md:mx-auto md:w-full"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>
      <Footer />
    </div>
  );
};

export default Home;
