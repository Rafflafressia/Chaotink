import PortfolioSubNavigation from "../components/PortfolioSubNavigation";
import FullStackDevelopmentCards from "../components/FullStackDevelopmentCards";
import GraphicDesignCards from "../components/GraphicDesignCards";
import IllustrationsCards from "../components/IllustrationsCards";
import React, { useState } from 'react';

const Portfolio = () => {
    const [currentCategory, setCurrentCategory] = useState('Full Stack Development');

    const handleCategorySelect = (category) => {
        setCurrentCategory(category);
    }

    return (
        <div>
            <div className="portfolio-container md:my-[20px] h-screen sm:h-screen lg:my-[100px] md:flex md:h-screen lg:h-[700px] xl:h-[883px] ">
                <PortfolioSubNavigation 
                categories={['Full Stack Development', 'Graphic Design', 'Illustration' ]}
                onSelectCategory={handleCategorySelect} />
                {currentCategory === 'Full Stack Development' && <FullStackDevelopmentCards />}
                {currentCategory === 'Graphic Design' && <GraphicDesignCards />}
                {currentCategory === 'Illustration' && <IllustrationsCards />}
            </div>
        </div>
    );
    }
    
export default Portfolio; 