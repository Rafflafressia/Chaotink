import ME from "../../assets/ME.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-box flex flex-col items-center my-12 lg:flex-row xl:mx-72">
      <div className="flex flex-col justify-center items-center m-8">
        <h1 className="text-4xl font-bold text-black m-4">
          This is <span className="text-[#16425b]">ME</span>
        </h1>
        <img src={ME} alt="My Picture" className="m-4 md:w-9/12 xl:w-full" />
      </div>
      <div className="m-8 lg:mx-12">
        <p className="font-bold text-lg">
          I've been working as a graphic designer for the last 10 years. I've
          had a pretty long winded journey to get to where I am today. I started
          off as a 3D Artist in the games industry, and moved into graphic
          design, and then into web development. I've worked on a variety of
          projects, from creating websites, to designing logos and
          illustrations.
        </p>
        <br />
        <p className="font-bold text-lg">
          Currently, I'm working on a pet project called Baketomo. A creature
          collection game where you can collect, trade and battle creatures. You
          can check out the project by clicking the button below. All
          illustrations and UI designs were done by me.
        </p>
        <Link
          to="/Bake"
          className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center p-2 my-8 mx-8 md:mx-32 lg:mx-24"
        >
          <p className="mx-2 font-bold">See case study</p> <FaArrowRightLong />
        </Link>

        <p className="font-bold text-lg">
          When I'm not being an important work asset I'm being a nerd. I've
          grown up with video games and trading cards. I've recently gotten into
          retro handheld gaming harkening to the good old days of the Gameboy. I
          also have a lot of money invested into Magic the Gathering.
        </p>
      </div>
    </div>
  );
};

export default About;
