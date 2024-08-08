import React from 'react';
import { useInView } from 'react-intersection-observer';

import PortfolioImg1 from "../../assets/illust-1.jpg";
import PortfolioImg2 from "../../assets/illust-2.jpg";
import PortfolioImg3 from "../../assets/illust-3.jpg";
import PortfolioImg4 from "../../assets/illust-4.jpg";
import PortfolioImg5 from "../../assets/illust-5.jpg";
import PortfolioImg6 from "../../assets/illust-6.jpg";
import PortfolioImg7 from "../../assets/illust-7.jpg";
import PortfolioImg8 from "../../assets/illust-8.jpg";
import PortfolioImg9 from "../../assets/bunny.jpg";
import PortfolioImg10 from "../../assets/cherry.jpg";
import PortfolioImg11 from "../../assets/ffxiv.jpg";
import PortfolioImg12 from "../../assets/froppy.jpg";
import PortfolioImg13 from "../../assets/girl.png";
import PortfolioImg14 from "../../assets/egypt.png";
import PortfolioImg15 from "../../assets/gundam.png";
import PortfolioImg16 from "../../assets/miku.jpg";
import PortfolioImg17 from "../../assets/penguin.jpg";
import PortfolioImg18 from "../../assets/daisy.png";
import PortfolioImg19 from "../../assets/demongirl.jpg";
import PortfolioImg20 from "../../assets/elf.jpg";
import PortfolioImg21 from "../../assets/fairy.jpg";
import PortfolioImg22 from "../../assets/mononoke.jpg";
import PortfolioImg23 from "../../assets/mouse.jpg";
import PortfolioImg24 from "../../assets/orc-sketch.jpg";
import PortfolioImg25 from "../../assets/pic02.png";
import PortfolioImg26 from "../../assets/pic03.png";
import PortfolioImg27 from "../../assets/pic05.png";
import PortfolioImg28 from "../../assets/RadioDemon.jpg";
import PortfolioImg29 from "../../assets/Trash Panda.jpg";
import PortfolioImg30 from "../../assets/wolf-girl.jpg";

const images = [
  PortfolioImg1, PortfolioImg2, PortfolioImg3, PortfolioImg4, PortfolioImg5, 
  PortfolioImg6, PortfolioImg7, PortfolioImg8, PortfolioImg9, PortfolioImg10,
  PortfolioImg11, PortfolioImg12, PortfolioImg13, PortfolioImg14, PortfolioImg15,
  PortfolioImg16, PortfolioImg17, PortfolioImg18, PortfolioImg19, PortfolioImg20,
  PortfolioImg21, PortfolioImg22, PortfolioImg23, PortfolioImg24, PortfolioImg25,
  PortfolioImg26, PortfolioImg27, PortfolioImg28, PortfolioImg29, PortfolioImg30
];

const Illustration = ({ src, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="p-4 lg:w-4/12 md:w-5/12 w-full">
      {inView && (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover shadow-md rounded-2xl"
        />
      )}
    </div>
  );
};

const IllustrationsCards = () => {
  return (
    <section className="px-8 py-24 lg:mx-32 xl:mx-72">
      <div className="illustrations-cards justify-center items-center">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-[#16425b] text-5xl font-bold">
            Personal
            <span className="text-[#2F6690]"> Drawings</span>
          </h1>
          <p className="text-[#2F6690] border-t-2 border-[#B9BAB7] border-b-2 p-8 md:text-lg">
            A collection of personal sketches and drawings that I've done over
            the years. I love to draw and sketch in my free time. I learned
            originally to draw digitally, so that I could work in the games
            industry. I've since changed my focus to draw on traditional
            mediums, like paper and canvas and as a way to relax and unwind.
            Interlaced with my illustrations are 3D projects that I've also
            worked on.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center m-8">
          {images.map((image, index) => (
            <Illustration key={index} src={image} alt={`Illustration ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IllustrationsCards;
