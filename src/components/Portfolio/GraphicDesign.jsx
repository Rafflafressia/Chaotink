import Brochures from "../../assets/brochures.png";
import BusinessCards from "../../assets/business-cards.png";
import GreetingCards from "../../assets/greeting-cards.png";
import Logos from "../../assets/logos.png";
import VehicleWraps from "../../assets/vehicle-wraps.png";
import WindowGraphics from "../../assets/window-graphics.png";
import ProductPackaging from "../../assets/product-packaging.png";

const graphicDesignProjects = [
  {
    title: "Brochures",
    description:
      "Common type of marketing collateral and are used to promote a company's products or services.",
    imageUrl: Brochures,
  },
  {
    title: "Business Cards",
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
    <section className="mx-auto my-2 flex flex-col p-4 contain-content w-[400px] [background:#404040] lg:w-[1240px] lg:h-full border-b border-slate-600 rounded-2xl">
      <div className="graphic-design-cards flex flex-col mx-auto items-center">
        <div className="flex flex-row justify-center px-4 mb-4">
          <h1 className="text-white text-right text-2xl font-bold mt-6">
            Graphic
            <span className="text-[#36DCA0]"> Design</span>
          </h1>
          <span className="border-r-2 mx-4 pl-2"></span>
          <p className="text-white">
            Graphic Design projects that I've worked on over the years. Broadly
            speaking they're broken up into the following categories.
          </p>
        </div>
        {graphicDesignProjects.map((project, index) => (
          <div
            key={index}
            className="graphic-design-card flex flex-col my-4 space-x-2 [background:#4D4D4D] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] border-[3px] border-solid border-[#2A7358] rounded-2xl"
          >
            <div className="projImg flex justify-center mt-2">
              <img
                src={project && project.imageUrl}
                alt={project && project.title}
                className="w-[200px]"
              />
            </div>
            <div className="projDesc">
              <h3 className="text-2xl text-[#36DCA0] font-bold md:mx-4">
                {project && project.title}
              </h3>
              <p className="text-white mb-4">
                {project && project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraphicDesignCards;
