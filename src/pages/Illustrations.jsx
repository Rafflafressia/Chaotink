import PortfolioImg1 from "../assets/illust-1.jpg";
import PortfolioImg2 from "../assets/illust-2.jpg";
import PortfolioImg3 from "../assets/illust-3.jpg";
import PortfolioImg4 from "../assets/illust-4.jpg";
import PortfolioImg5 from "../assets/illust-5.jpg";
import PortfolioImg6 from "../assets/illust-6.jpg";
import PortfolioImg7 from "../assets/illust-7.jpg";
import PortfolioImg8 from "../assets/illust-8.jpg";
import PortfolioImg9 from "../assets/bunny.jpg";
import PortfolioImg10 from "../assets/cherry.jpg";
import PortfolioImg12 from "../assets/ffxiv.jpg";
import PortfolioImg13 from "../assets/froppy.jpg";
import PortfolioImg14 from "../assets/miku.jpg";
import PortfolioImg15 from "../assets/penguin.jpg";
import BackButton from "../components/BackButton";

import { useEffect } from "react";

const illustrations = [
  {
    imageUrl: PortfolioImg1,
  },
  {
    imageUrl: PortfolioImg2,
  },
  {
    imageUrl: PortfolioImg3,
  },
  {
    imageUrl: PortfolioImg4,
  },
  {
    imageUrl: PortfolioImg5,
  },
  {
    imageUrl: PortfolioImg6,
  },
  {
    imageUrl: PortfolioImg7,
  },
  {
    imageUrl: PortfolioImg8,
  },
  {
    imageUrl: PortfolioImg9,
  },
  {
    imageUrl: PortfolioImg10,
  },
  {
    imageUrl: PortfolioImg12,
  },
  {
    imageUrl: PortfolioImg13,
  },
  {
    imageUrl: PortfolioImg14,
  },
  {
    imageUrl: PortfolioImg15,
  },
];

const IllustrationsCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto my-2 p-4 contain-content w-[400px] [background:#404040] lg:w-[1240px] lg:h-full border-b border-slate-600 rounded-2xl">
      <div className="illustrations-cards h-full justify-center items-center">
        <div className="flex flex-row justify-center px-4 mb-4">
          <h1 className="text-white text-right text-2xl lg:text-6xl font-bold mt-6">
            3D Models &<span className="text-[#36DCA0]"> Illustrations</span>
          </h1>
          <span className="border-r-2 mx-4 pl-2"></span>
          <p className="text-white lg:text-4xl">
            A collection of illustrations, 3D models and animations that I’ve
            worked on for personal projects as well as game projects I was hired
            on for.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:h-screen my-12 justify-center space-x-2">
          <span className="invisible lg:visible lg:border-t-2 lg:border-white lg:w-[1200px] relative"></span>
          {illustrations.map((illustration) => (
            <div className="my-4 relative bg-auto overflow-hidden [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2A7358] w-[300px] h-[200px] lg:w-[200px] lg:h-[300px] rounded-2xl">
              <div
                style={{
                  backgroundImage: `url(${illustration.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0"
              ></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:h-screen my-12 justify-center space-x-2">
          <span className="invisible lg:visible lg:border-t-2 lg:border-white lg:w-[1200px] relative"></span>
          {illustrations.map((illustration) => (
            <div className="my-4 relative bg-auto overflow-hidden [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2A7358] w-[300px] h-[200px] lg:w-[200px] lg:h-[300px] rounded-2xl">
              <div
                style={{
                  backgroundImage: `url(${illustration.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0"
              ></div>
            </div>
          ))}
        </div>
      </div>
      <BackButton />
    </section>
  );
};

export default IllustrationsCards;
