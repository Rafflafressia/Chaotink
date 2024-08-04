import { Link } from "react-router-dom";
import bgFS from "../../assets/web-development.jpg";
import bgGD from "../../assets/graphic-design.jpg";
import bgIL from "../../assets/illustrations.jpg";

const PortfolioSubNavigation = ({ categories }) => {
  const bgImages = [bgFS, bgGD, bgIL];

  return (
    <aside className="portfolio-sub-navigation text-center">
      <h1 className="text-[#16425b] text-4xl font-bold mb-4 lg:text-[90px]">
        Portfolio
      </h1>
      <ul className="list-none flex flex-col md:flex-row justify-center space-x-2 mx-auto md:mx-auto md:my-[50px] w-[200px] md:text-right md:px-2 items-center">
        {categories.map(([category, path], index) => (
          <li key={index}>
            <Link to={path}>
              <button className="my-2 relative bg-auto overflow-hidden [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#16425b] w-[300px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-2xl">
                <div
                  style={{
                    backgroundImage: `url(${bgImages[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="absolute inset-0 w-full h-full transform hover:scale-105"
                ></div>
                <h2 className="text-white z-10 bg-black w-full h-[100px] md:h-[105px] text-2xl font-bold text-right relative float-right p-3 top-24 bg-opacity-75 lg:top-[275px]">
                  {category}
                </h2>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PortfolioSubNavigation;
