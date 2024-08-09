import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
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
    <div>
    {isVisible && (
      <div className="mt-4 border-t-2 border-gray-200">
        <button
          onClick={scrollToTop}
          className="w-full text-left mt-4 py-2 px-4 text-white rounded-lg hover:bg-blue-100 hover:text-black focus:outline-none transition duration-300 ease-in-out"
        >
          Back to Top
        </button>
      </div> 
    )}
  </div>
)
};

export default ScrollToTopButton;
