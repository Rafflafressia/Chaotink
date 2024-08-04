import PortfolioImg1 from "../../assets/illust-1.jpg";
import PortfolioImg2 from "../../assets/illust-2.jpg";
import PortfolioImg3 from "../../assets/illust-3.jpg";
import PortfolioImg4 from "../../assets/illust-4.jpg";
import PortfolioImg5 from "../../assets/illust-5.jpg";
import PortfolioImg6 from "../../assets/illust-6.jpg";
import PortfolioImg7 from "../../assets/illust-7.jpg";
import PortfolioImg8 from "../../assets/illust-8.jpg";
import BackButton from "../BackButton";

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
    <section className="mx-auto my-2 p-4 contain-content w-[400px] [background:#404040] lg:w-[1240px] lg:h-full border-b border-slate-600 rounded-2xl">
      <div className="illustrations-cards h-full justify-center items-center">
        <div className="flex flex-row justify-center px-4 mb-4">
          <h1 className="text-white text-right text-2xl font-bold mt-6">
            Personal
            <span className="text-[#36DCA0]"> Drawings</span>
          </h1>
          <span className="border-r-2 mx-4 pl-2"></span>
          <p className="text-white">
            Above all else, I love to draw. Here are some of my personal
            favourites. If you're an artist worth your salt, you'll have more
            WIPs than finished pieces.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:h-screen">
          {illustrations.map((illustration, index) => (
            <div
              key={index}
              className="illustrations-card my-4 mx-4 space-x-2 md:w-full md:h-full"
            >
              <img
                src={illustration.imageUrl}
                alt={`Illustration ${index}`}
                className="[background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2A7358] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <BackButton />
    </section>
  );
};

export default IllustrationsCards;
