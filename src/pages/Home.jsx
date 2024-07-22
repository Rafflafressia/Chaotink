import SitePhoto from "../assets/hero-page.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/CaseStudy"

const Home = () => {
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
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

      <div className="">
      <h1 className="text-left text-4xl font-bold">Case Studies</h1>
      <div className="case-studies overflow-hidden flex flex-col flex-wrap md:flex-row justify-center">
      <CaseStudy img={<div className="w-[200px] h-[200px] bg-slate-900 md:w-[650px] md:h-[400px] rounded-[15px]"></div>} title={<h1 className="text-2xl"><strong>Case Study:</strong> Baketomo</h1>} description={"Baketomo is a web browswer game where players can collect monsters, go on dungeons and buy items."} />
      <CaseStudy img={<div className="w-[200px] h-[200px] bg-slate-900 md:w-[650px] md:h-[400px] rounded-[15px]"></div>} title={<h1 className="text-2xl"><strong>Case Study:</strong> Baketomo</h1>} description={"Baketomo is a web browswer game where players can collect monsters, go on dungeons and buy items."} />
      <CaseStudy img={<div className="w-[200px] h-[200px] bg-slate-900 md:w-[650px] md:h-[400px] rounded-[15px]"></div>} title={<h1 className="text-2xl"><strong>Case Study:</strong> Baketomo</h1>} description={"Baketomo is a web browswer game where players can collect monsters, go on dungeons and buy items."} />
      <CaseStudy img={<div className="w-[200px] h-[200px] bg-slate-900 md:w-[650px] md:h-[400px] rounded-[15px]"></div>} title={<h1 className="text-2xl"><strong>Case Study:</strong> Baketomo</h1>} description={"Baketomo is a web browswer game where players can collect monsters, go on dungeons and buy items."} />
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
