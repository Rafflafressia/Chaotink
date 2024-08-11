import CaseStudyOne from "../CaseStudies/BaketomoInfoPage.jsx";
import CaseStudyTwo from "../CaseStudies/StarInventoryPage.jsx";
import CaseStudyThree from "../CaseStudies/PremierCustomPage.jsx";
import CaseStudyFour from "../CaseStudies/AnswerablesPage.jsx";

import CaseStudy from "../CaseStudyCards.jsx";
import { useEffect } from "react";

import Answerables from "../../assets/answerables/answerables-card.png";
import Baketomo from "../../assets/mobile-game-card.png";
import StarInventory from "../../assets/full-stack-card.png";
import PremiumCustom from "../../assets/premium-custom-card.png";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      img: Baketomo,
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Baketomo",
      description:
        "Baketomo is a web browser game that takes insipiration from Pokemon and Neopets. Players can collect monsters, explore dungeons to expand their collection and buy items.",
    },
    {
      img: StarInventory,
      label: "FULL STACK WEB DEVELOPMENT",
      title: "Star Inventory Logistics",
      description:
        "A CMS application for inventory management for small businesses. Organize your products, track sales and manage your inventory.",
    },
    {
      img: PremiumCustom,
      label: "GRAPHIC DESIGN",
      title: "Premier Custom Surfacing",
      description:
        "Designed, printed and wrapped 8 trucks and 1 trailer. Premium Custom Surfacing or Playsafe Canada specializes in rubberized pour-in surfaces.",
    },
    {
      img: Answerables,
      label: "GAME DEVELOPMENT",
      title: "Answerables",
      description:
        "An educational game for kids to learn math, science and english. Avatars are used to represent students as they explore worlds currated to the school curriculumn.",
    },
  ];

  return (
    <div>
      <section className="py-16 flex flex-col items-center">
        <h1 className="text-[#16425b] text-[50px] font-bold lg:text-[100px]">
          Case Studies
        </h1>
        <div className="case-studies overflow-hidden flex flex-col flex-wrap md:flex-row justify-center">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              img={
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-[200px] h-[200px] lg:w-[500px] lg:h-[350px] rounded-[10px] shadow-md md:shadow-lg"
                />
              }
              label={
                <label className="relative top-4 text-[12px] tracking-wider">
                  {study.label}
                </label>
              }
              title={study.title}
              description={study.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
