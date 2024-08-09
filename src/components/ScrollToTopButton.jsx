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
    <div className="fixed bottom-0 z-50 left-1/2 transform -translate-x-1/2">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="text-black font-bold"
        >
          <FaArrowAltCircleUp size={60} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
