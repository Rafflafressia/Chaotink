import Brochures from "../assets/brochures.png";
import BusinessCards from "../assets/business-cards.png";
import GreetingCards from "../assets/greeting-cards.png";
import Logos from "../assets/logos.png";
import VehicleWraps from "../assets/vehicle-wraps.png";
import WindowGraphics from "../assets/window-graphics.png";
import ProductPackaging from "../assets/product-packaging.png";

const graphicDesignProjects = [
  {
    title: "Brochures",
    description:
      "Common type of marketing collateral and are used to promote a company's products or services.",
    imageUrl: Brochures,
  },
  {
    title: "BusinessCards",
    description:
      "Business cards are cards bearing business information about a company or individual.",
    imageUrl: BusinessCards,
  },
  {
    title: "Greeting Cards",
    description:
      "Greetings cards are cards that express feelings or sentiments to people.",
    imageUrl: GreetingCards,
  },
  {
    title: "Logos",
    description:
      "A logo is a graphic mark, emblem, symbol, or stylized name used to identify a company, organization, product, or brand.",
    imageUrl: Logos,
  },
  {
    title: "Vehicle Wraps",
    description:
      "Vehicle wraps are large vinyl graphics or decals that are applied directly over the vehicle's original paint.",
    imageUrl: VehicleWraps,
  },
  {
    title: "Window Graphics",
    description:
      "Window graphics are a great way to promote your business and attract customers.",
    imageUrl: WindowGraphics,
  },
  {
    title: "Product Packaging",
    description:
      "Product packaging is the science, art, and technology of enclosing or protecting products for distribution, storage, sale, and use.",
    imageUrl: ProductPackaging,
  },
];

const GraphicDesignCards = () => {
  return (
    <div className="graphic-design-cards flex flex-col mx-auto items-center">
      <h1 className="text-white text-2xl font-bold mt-6">Graphic Design</h1>
      {graphicDesignProjects.map((project, index) => (
        <div
          key={index}
          className="graphic-design-card flex flex-col md:col items-center text-center mx-auto md:mx-[50px] my-12 bg-cyan-950 border-cyan-300 border-2"
        >
          <div className="projImg w-[150px] h-[150px] my-4">
            <img
              src={project && project.imageUrl}
              alt={project && project.title}
            />
          </div>
          <div className="projDesc py-2">
            <h3 className="text-2xl text-white font-bold my-2 md:mx-4">
              {project && project.title}
            </h3>
            <p className="text-white">{project && project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphicDesignCards;
