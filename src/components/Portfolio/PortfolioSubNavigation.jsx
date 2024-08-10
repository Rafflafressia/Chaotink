import { useState } from "react";
import bgFS from "../../assets/web-development.jpg";
import bgGD from "../../assets/graphic-design.jpg";
import bgIL from "../../assets/illustrations.jpg";

const PortfolioSubNavigation = ({ categories, onSelectCategory }) => {
  const bgImages = [bgFS, bgGD, bgIL];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="portfolio-sub-navigation py-1 text-center flex flex-col items-center">
      <h1 className="text-[#16425b] text-[50px] font-bold lg:text-[100px]">
        Portfolio
      </h1>
      <p className="pb-4 mb-4 text-lg italic text-gray border-b-2">
        A collection of standalone projects produced by me.
      </p>
      <ul className="list-none flex flex-col md:flex-row justify-center space-x-2 w-[200px] md:text-right md:px-2 items-center">
        {categories.map((category, index) => (
          <li key={index}>
            <button className="my-2 relative bg-auto overflow-hidden [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#16425b] w-[300px] h-[200px] lg:w-[350px] lg:h-[500px] rounded-2xl">
              <div
                style={{
                  backgroundImage: `url(${bgImages[index]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="absolute inset-0 w-full h-full transform hover:scale-105"
                onClick={() => handleCategorySelect(category)}
              ></div>
              <h2 className="text-white z-10 bg-black w-full h-[100px] md:h-[105px] text-2xl font-bold text-right relative float-right p-3 top-24 bg-opacity-75 lg:top-[245px]">
                {category}
              </h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioSubNavigation;
