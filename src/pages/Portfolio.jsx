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
            <div className="md:my-[20px] lg:my-[100px] md:flex">
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