import React, { useState } from 'react';

const PortfolioSubNavigation = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    };

    return (
        <aside className="portfolio-sub-navigation md:border-r-2 md:border-cyan-300">
            <ul className="flex justify-center space-x-2 my-[10px] mx-auto md:mx-[25px] md:block md:my-[50px] w-[200px] md:text-right md:px-2 items-center">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`text-sm p-2 rounded-md md:mx-1 md:border-b-2 md:border-cyan-300 md:p-2 ${category === selectedCategory ? 'active text-cyan-300' : 'text-white'} hover:text-cyan-300 hover:bg-cyan-950`}
                        onClick={() => handleCategorySelect(category)}
                    ><button>
                        {category}
                    </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};


export default PortfolioSubNavigation;