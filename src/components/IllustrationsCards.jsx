import PortfolioImg1 from "../assets/illust-1.jpg";
import PortfolioImg2 from "../assets/illust-2.jpg";
import PortfolioImg3 from "../assets/illust-3.jpg";
import PortfolioImg4 from "../assets/illust-4.jpg";
import PortfolioImg5 from "../assets/illust-5.jpg";
import PortfolioImg6 from "../assets/illust-6.jpg";
import PortfolioImg7 from "../assets/illust-7.jpg";
import PortfolioImg8 from "../assets/illust-8.jpg";

const illustrations = [
  {
    imageUrl: PortfolioImg1,
  },
  {
    imageUrl: PortfolioImg2,
  },
  {
    imageUrl: PortfolioImg3,
  },
  {
    imageUrl: PortfolioImg4,
  },
  {
    imageUrl: PortfolioImg5,
  },
  {
    imageUrl: PortfolioImg6,
  },
  {
    imageUrl: PortfolioImg7,
  },
  {
    imageUrl: PortfolioImg8,
  },
];

const IllustrationsCards = () => {
  return (
    <div className="illustrations-cards flex flex-wrap flex-col justify-center items-center">
      <h1 className="text-white text-2xl font-bold mt-6">Illustrations</h1>
      {illustrations.map((illustration, index) => (
        <div
          key={index}
          className="illustrations-card flex-row my-4 mx-4 space-x-2"
        >
          <div className="projImg">
            <img
              src={illustration.imageUrl}
              alt={`Illustration ${index}`}
              className="w-[150px] lg:w-[200px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IllustrationsCards;
