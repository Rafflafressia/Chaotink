import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudy = ({ img, title, description, label }) => {
  const truncatedTitle = title.substring(0, 4);

  return (
    <div className="lg:m-1 border-t-2 border-gray xl:border-t-0 py-4">
      <div className="case-study lg:relative lg:overflow-hidden flex mb-40 sm:mb-12 md:mb-0 space-x-2 justify-center items-start rounded-[15px]">
        {img}
        <div className="description invisible fixed lg:w-[450px] lg:h-[225px] lg:absolute lg:visible lg:flex lg:flex-col lg:items-start lg:px-4 lg:justify-center lg:bottom-0 rounded-[10px]">
          <div className="flex flex-col justify-center items-start">
            {label}
            <h1 className="font-bold text-[25px] relative top-6">{title}</h1>
            <p className="text-left text-[15px] w-[400px] h-[100px] fixed lg:relative top-4 flex justify-start items-center">
              {description}
            </p>
            <Link
              to={`/${truncatedTitle}`}
              className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center p-2 my-4"
            >
              <p className="mx-2 font-bold">See case study</p>{" "}
              <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div className="visible w-[200px] h-[250px] sm:w-[275px] sm:h-[250px] lg:invisible lg:w-[0px] lg:h-[0px]">
          <h1 className="mb-4 font-bold text-2xl md:mb-0">{title}</h1>
          <div className="flex flex-col justify-center">
            <p>{description}</p>
            <Link
              to={`/${truncatedTitle}`}
              className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center py-[6px] px-[3px] my-4 sm:p-2 sm:mx-3 sm:my-4 md:mx-12 lg:mx-0 lg:p-0"
            >
              <p className="mx-2 text-sm md:text-md font-bold lg:mx-0">
                See case study
              </p>{" "}
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
