import { useState } from "react";
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

import { MdCloudDownload } from "react-icons/md";

const Contact = () => {
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

  const resumeURL =
    "https://drive.google.com/uc?export=download&id=1Ya01_29B_vlOx9hSifzDDpvhcyUGH2EO";

  const downloadResume = () => {
    window.open(resumeURL, "_blank");
  };

  const githubURL = "https://github.com/Rafflafressia";

  const goToGitHub = () => {
    window.open(githubURL, "_blank");
  };

  const facebookURL = "https://www.facebook.com/arkaw.banerjee/";

  const goToFB = () => {
    window.open(facebookURL, "_blank");
  };

  const instagramURL = "https://www.instagram.com/rafflafressia/?hl=en";

  const goToInsta = () => {
    window.open(instagramURL, "_blank");
  };

  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center py-24 space-x-2 space-y-8">
      <h1 className="text-[#16425b] text-4xl font-bold">Contact</h1>
      {categories.map((category, index) => (
        <div key={index} className="mx-auto px-4">
          <h2 className="m-auto text-[#16425b] my-4 text-2xl font-bold text-wrap text-center">
            {category.name}
          </h2>
          <div className="flex flex-row flex-wrap space-x-2">
            {category.proficiencies.map((proficiency, index) => {
              const Icon = proficiency.icon;
              return (
                <Icon key={index} size={36} color="#3a7ca5" className="m-1" />
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex flex-col justify-center items-center mx-auto space-y-4">
        <p className="text-[#16425b] text-lg text-center">
          If you're looking to get in touch please feel free to reach out to me
          on:
        </p>
        <div className="flex flex-row space-x-4">
          <SiFacebook size={36} color="#3a7ca5" onClick={goToFB} />
          <SiLinkedin size={36} color="#3a7ca5" onClick={goToLinkedIn} />
          <SiInstagram size={36} color="#3a7ca5" onClick={goToInsta} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto space-y-4">
        <p className="text-[#16425b] text-lg text-center">
          Before you go! You can grab my resume or checkout my github page!
        </p>
        <div className="flex flex-row space-x-4">
          <MdCloudDownload size={36} color="#3a7ca5" onClick={downloadResume} />
          <SiGithub size={36} color="#3a7ca5" onClick={goToGitHub} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
