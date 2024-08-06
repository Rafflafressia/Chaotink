import PortfolioSubNavigation from "./PortfolioSubNavigation";
const Portfolio = () => {
  return (
    <div className="portfolio-container">
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
