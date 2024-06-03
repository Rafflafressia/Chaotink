import PortfolioSubNavigation from "./PortfolioSubNavigation";
const Portfolio = () => {
  return (
    <div className="portfolio-container my-12 md:my-[20px] lg:my-[100px]">
      <div>
        <PortfolioSubNavigation
          categories={[
            ["Full Stack Development", "/web-dev"],
            ["Graphic Design", "/graphic-design"],
            ["Illustration", "/illustrations"],
          ]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
