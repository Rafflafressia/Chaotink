import ME from "../../assets/ME.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-box flex flex-col items-center my-12 md:flex-row">
      <div className="md:w-full md:h-full md:mx-12 md:flex md:flex-col items-center">
        <h1 className="text-4xl font-bold text-white">
          This is <span className="text-[#36DCA0]">ME</span>
        </h1>
        <img
          src={ME}
          alt="My Picture"
          className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] mt-3"
        />
      </div>
      <div>
        <p className="mt-12 text-xl text-white mx-10 text-left lg:text-2xl">
          I am a budding UI/UX designer. My passion is in illustrations, graphic
          designs and web application designs.
        </p>
        <p className="mt-12 text-xl text-white mx-10 text-left lg:text-2xl">
          Currently, I'm working on a pet project called Baketomo. A creature
          collection game where you can collect, trade and battle creatures. You
          can check out the project by clicking the button below.
        </p>
        <Link
          to="/BaketomoInfoPage"
          className="[background:#36DCA0] rounded-[12.948px] border-[3.7px] border-solid border-[#22B27F] text-[#106F4C] h-[40px] w-[100px] mx-auto my-8 text-center justify-center items-center flex"
        >
          Baketomo
        </Link>
      </div>
    </div>
  );
};

export default About;
