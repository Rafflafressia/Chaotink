import { useEffect } from "react";

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
  {
    projectUrl: ProjectOne,
  },
  {
    projectUrl: ProjectTwo,
  },
  {
    projectUrl: ProjectThree,
  },
  {
    projectUrl: ProjectFour,
  },
  {
    projectUrl: ProjectFive,
  },
  {
    projectUrl: ProjectSix,
  },
  {
    projectUrl: ProjectSeven,
  },
  {
    projectUrl: ProjectEight,
  },
  {
    projectUrl: ProjectNine,
  },
];

const GraphicDesignCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-24 lg:mx-32 xl:mx-72">
      <div className="graphic-design-cards flex flex-col mx-auto items-center">
        <div className="flex flex-col justify-center items-start space-y-4">
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
        </div>
        <div className="flex flex-wrap justify-center items-center my-8 space-y-8">
          {graphicDesignProjects.map((graphicProjects, index) => (
            <div key={index} className="w-full">
              <img
                src={graphicProjects.projectUrl}
                alt={`Illustration ${index}`}
                className="w-full h-auto object-cover shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2f6690]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignCards;
