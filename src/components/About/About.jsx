import ME from "../../assets/profile-picture.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAffinitydesigner,
  SiAutodeskmaya,
  SiBlender,
  SiBootstrap,
  SiCanva,
  SiCss3,
  SiFacebook,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiNodedotjs,
  SiReact,
  SiSequelize,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiVite,
  SiReactrouter,
  SiTailwindcss,
  SiJest,
  SiPwa,
  SiGraphql,
  SiApollographql,
  SiInstagram,
} from "react-icons/si";

const About = () => {
  const categories = [
    {
      name: "Graphic Proficiencies",
      proficiencies: [
        {
          name: "Adobe Illustrator",
          icon: SiAdobeillustrator,
        },
        {
          name: "Canva",
          icon: SiCanva,
        },
        {
          name: "Figma",
          icon: SiFigma,
        },
        {
          name: "Adobe InDesign",
          icon: SiAdobeindesign,
        },
        {
          name: "Adobe Photoshop",
          icon: SiAdobephotoshop,
        },
        {
          name: "Affinity Designer",
          icon: SiAffinitydesigner,
        },
        {
          name: "Autodesk Maya",
          icon: SiAutodeskmaya,
        },
        {
          name: "Blender",
          icon: SiBlender,
        },
      ],
    },
    {
      name: "Front-End Proficiencies",
      proficiencies: [
        {
          name: "Bootstrap",
          icon: SiBootstrap,
        },
        {
          name: "CSS3",
          icon: SiCss3,
        },
        {
          name: "HTML5",
          icon: SiHtml5,
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
        },
        {
          name: "React",
          icon: SiReact,
        },
        {
          name: "React Router",
          icon: SiReactrouter,
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
        },
        {
          name: "Vite",
          icon: SiVite,
        },
      ],
    },
    {
      name: "Back-End Proficiencies",
      proficiencies: [
        {
          name: "Sequelize",
          icon: SiSequelize,
        },
        {
          name: "Express",
          icon: SiExpress,
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
        },
        {
          name: "Mongoose",
          icon: SiMongoose,
        },
        {
          name: "MySQL",
          icon: SiMysql,
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
        },
        {
          name: "Jest",
          icon: SiJest,
        },
        {
          name: "PWA",
          icon: SiPwa,
        },
        {
          name: "GraphQL",
          icon: SiGraphql,
        },
        {
          name: "Apollo GraphQL",
          icon: SiApollographql,
        },
      ],
    },
  ];

  return (
    <div className="about-box flex flex-col-reverse pt-12 md:py-16 items-center justify-center lg:flex-row lg:py-0 xl:mx-72">
      <img src={ME} alt="My Picture" className="md:w-9/12" />
      <div className="m-4 lg:mx-12 flex-col items-center justify-center">
        <h1 className="text-6xl xl:text-[60px] lg:text-[45px] py-8">
          Full Stack Developer, Graphic Designer, Illustrator
        </h1>
        <p className="text-lg ">
          I've been working as a graphic designer for the last 10 years. I've
          had a pretty long winded journey to get to where I am today. I started
          off as a 3D Artist in the games industry, and moved into graphic
          design, and then into web development. I've worked on a variety of
          projects, from creating websites, to designing logos and
          illustrations.
        </p>
        <br />
        <p className="text-lg">
          Currently, I'm working on a pet project called Baketomo. A creature
          collection game where you can collect, trade and battle creatures. You
          can check out the project by clicking the button below. All
          illustrations and UI designs were done by me.
        </p>
        <Link
          to="/Bake"
          className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center p-2 my-8 mx-8 md:mx-32 lg:mx-32 xl:mx-96"
        >
          <p className="mx-2 font-bold">See case study</p> <FaArrowRightLong />
        </Link>

        <p className="text-lg">
          When I'm not being an important work asset I'm being a nerd. I've
          grown up with video games and trading cards. I've recently gotten into
          retro handheld gaming harkening to the good old days of the Gameboy. I
          also have a lot of money invested into Magic the Gathering.
        </p>

        <div className="flex flex-col md:flex-row">
          {categories.map((category, index) => (
            <div key={index} className="mx-auto flex flex-row items-center">
              <div>
                <h2 className="m-auto text-[#16425b] my-4 text-lg font-bold text-wrap text-center">
                  {category.name}
                </h2>
                <div className="flex flex-row flex-wrap">
                  {category.proficiencies.map((proficiency, index) => {
                    const Icon = proficiency.icon;
                    return (
                      <Icon
                        key={index}
                        size={25}
                        color="#3a7ca5"
                        className="m-1"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
