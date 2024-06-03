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
    <div className="fixed bottom-0 right-0">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="[background:#36DCA0] text-white font-bold py-2 px-4 rounded-full mb-2 mr-2"
        >
          <FaArrowAltCircleUp size={60} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
