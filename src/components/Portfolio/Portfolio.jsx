import { useState, useEffect } from "react";

import PortfolioSubNavigation from "./PortfolioSubNavigation";
import GraphicDesign from "../Portfolio/GraphicDesign";
import Illustrations from "../Portfolio/Illustrations";
import FullStack from "../Portfolio/FullStackWebDevelopment";
import SideNav from "../AsideNav";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Set initial state for current category as null (no category selected)
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category); // Set selected category
    setIsVisible(false); // Hide the navigation
  };

  const handleBackToNavigation = () => {
    setIsVisible(true); // Show the navigation again
    setCurrentCategory(null); // Reset the current category
    window.scrollTo(0, 0);
  };

  const categories = [
    "Full Stack Development",
    "Graphic Design",
    "Illustration",
  ];

  return (
    <div className="portfolio-container py-16 flex flex-col items-center">
      <div>
        {/* Conditionally render PortfolioSubNavigation */}
        {isVisible && (
          <PortfolioSubNavigation
            categories={categories}
            onSelectCategory={handleCategorySelect}
          />
        )}

        {/* Conditionally render the category components */}
        {!isVisible && currentCategory === "Full Stack Development" && (
          <FullStack />
        )}
        {!isVisible && currentCategory === "Graphic Design" && <GraphicDesign />}
        {!isVisible && currentCategory === "Illustration" && <Illustrations />}

        {/* Button to go back to categories */}
        {!isVisible && (
          <SideNav categories={categories}  onSelectCategory={handleCategorySelect} onBackToNavigation={handleBackToNavigation}/>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
