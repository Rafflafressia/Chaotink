import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goBack = () => {
    navigate("/");
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
          onClick={goBack}
          className="[background:#36DCA0] text-white font-bold py-2 px-4 rounded-full mb-2 mr-2"
        >
          <FaArrowLeft size={30} />
        </button>
      )}
    </div>
  );
};

export default BackButton;
