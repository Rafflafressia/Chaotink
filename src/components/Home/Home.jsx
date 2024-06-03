import SitePhoto from "../../assets/hero-page.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Home = () => {
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  return (
    <div className="home__container my-16 flex-wrap flex-row text-center justify-center items-center">
      <Navbar />
      <div className="relative flex flex-col items-center justify-center space-x-12 md:space-x-4 2xl:space-x-[200px] md:flex-row md:h-[700px] 2xl:h-[900px]">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-white md:text-[75px] md:flex md:flex-col md:text-left">
            Arkaw <span className="text-[#36DCA0] mt-8">Banerjee</span>
          </h1>
          <p className="text-white my-4 text-xl md:w-[500px] 2xl:w-[500px] 2xl:mx-auto md:mt-11 2xl:text-[35px] 2xl:leading-10 md:text-left">
            I'm a{" "}
            <Link to="web-dev" className="text-[#36DCA0]">
              Full Stack Web Developer
            </Link>
            ,{" "}
            <Link to="graphic-design" className="text-[#36DCA0]">
              Graphic Designer
            </Link>
            , and{" "}
            <Link to="illustrations" className="text-[#36DCA0]">
              Illustrator
            </Link>
            .
          </p>
          <p className="text-white my-4 text-xl md:w-[500px] 2xl:w-[500px] 2xl:mx-auto md:mt-11 2xl:text-[35px] 2xl:leading-10 md:text-left">
            I specialize in creating responsive websites and applications
          </p>
          <img
            src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb"
            alt="My Skills"
            className="pt-5 w-96 mx-auto lg:mx-0"
          />
          <button
            onClick={goToLinkedIn}
            className="[background:#36DCA0] rounded-[12.948px] border-[3.7px] border-solid border-[#22B27F] text-[#106F4C] h-[40px] w-[100px] my-8 mx-2 lg:float-start"
          >
            Connect
          </button>
          <a href="#portfolio">
            <button className="[background:#36DCA0] rounded-[12.948px] border-[3.7px] border-solid border-[#22B27F] text-[#106F4C] h-[40px] w-[100px] my-8 mx-2 lg:float-start">
              Portfolio
            </button>
          </a>
        </div>
        <div>
          <img
            src={SitePhoto}
            alt="picture of profile"
            className="sitePhoto h-[5px] sm:h-[100px] md:h-[500px] 2xl:h-[650px] mx-auto invisible md:visible md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
