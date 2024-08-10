import { useEffect } from "react";
import SideNav from "../AsideNav";

import ProjectOne from "../../assets/Artboard 3-100.jpg";
import ProjectTwo from "../../assets/Artboard 4-100.jpg";
import ProjectThree from "../../assets/Artboard 5-100.jpg";
import ProjectFour from "../../assets/Artboard 6-100.jpg";
import ProjectFive from "../../assets/Artboard 7-100.jpg";
import ProjectSix from "../../assets/Artboard 8-100.jpg";
import ProjectSeven from "../../assets/Artboard 9-100.jpg";
import ProjectEight from "../../assets/Artboard 10-100.jpg";
import ProjectNine from "../../assets/Artboard 11-100.jpg";

const graphicDesignProjects = [
  { projectUrl: ProjectOne, description: "Project One Description" },
  { projectUrl: ProjectTwo, description: "Project Two Description" },
  { projectUrl: ProjectThree, description: "Project Three Description" },
  { projectUrl: ProjectFour, description: "Project Four Description" },
  { projectUrl: ProjectFive, description: "Project Five Description" },
  { projectUrl: ProjectSix, description: "Project Six Description" },
  { projectUrl: ProjectSeven, description: "Project Seven Description" },
  { projectUrl: ProjectEight, description: "Project Eight Description" },
  { projectUrl: ProjectNine, description: "Project Nine Description" },
];

const GraphicDesignCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 pt-24 md:py-8 xl:py-24 lg:mx-32 xl:mx-72">
      <SideNav
        categories={[
          ["Full Stack Development", "web-dev"],
          ["Graphic Design", "graphic-design"],
          ["Illustration", "illustrations"],
        ]}
      />
      <div className="graphic-design-cards flex flex-col mx-auto items-center">
        <header className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-[#16425b] text-5xl font-bold">
            Graphic
            <span className="text-[#2F6690]"> Design</span>
          </h1>
          <p className="text-[#2F6690] border-t-2 border-[#B9BAB7] border-b-2 p-8 md:text-lg">
            I have been a graphic designer for about 10 years working for
            various companies and shops. I've worked on 100s of projects, so
            instead of showing you all of them, here are a few of my favorites.
            These also include the wide variety of signage, logos, and branding
            that I've done over the years. I believe that these projects each
            provided a unique challenge and I'm proud of the results.
          </p>
        </header>
        <div className="flex flex-wrap justify-center items-center my-8 space-y-8">
          {graphicDesignProjects.map((project, index) => (
            <div key={index} className="w-full">
              <img
                src={project.projectUrl}
                alt={project.description}
                className="w-full h-auto object-cover shadow-md border-3 border-solid border-[#2f6690]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignCards;
