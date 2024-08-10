import BackToTop from "../components/ScrollToTopButton";
import { useState, useEffect } from "react";

const SubNav = ({ categories, onSelectCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <aside className="visible fixed px-2 rounded-2xl left-1/2 -translate-x-1/2 bottom-[80px] xl:-translate-x-0 xl:bottom-auto xl:top-[125px] xl:left-10 [background:#16425b] xl:shadow-lg xl:rounded-lg xl:p-4 xl:w-[220px]">
      <ul className="list-none flex space-x-8 xl:flex-col justify-center items-center xl:space-x-0 xl:items-start xl:space-y-4">
        {categories.map((category, index) => (
          <li key={index} className="w-full">
            <button
              className="w-full text-md text-center xl:text-left py-2 px-2 xl:text-lg xl:px-4 text-white rounded-lg hover:bg-blue-100 xl:hover:text-black focus:outline-none transition duration-300 ease-in-out"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <div>
        {isVisible && (
          <div className="xl:mt-4 xl:border-t-2 xl:border-gray-200">
            <button
              onClick={scrollToTop}
              className="w-full invisible fixed xl:visible xl:relative xl:text-left xl:mt-4 xl:py-2 xl:px-4 xl:text-white rounded-lg hover:bg-blue-100 hover:text-black focus:outline-none transition duration-300 ease-in-out"
            >
              Back to Top
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SubNav;
