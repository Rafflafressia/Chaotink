import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudy = ({ img, title, description, label }) => {
  const Divider = () => {
    return (
      <hr
        className="visible w-full mx-auto my-12 md:my-0 md:invisible md:w-0 md:h-0 md:mx-0"
        style={{ borderTop: "1px solid lightgrey" }}
      ></hr>
    );
  };

  return (
    <div>
      <Divider />

      {/* Hover Container */}
      <div className="case-study md:relative md:overflow-hidden flex mb-24 md:m-2 space-x-2 justify-center items-start">
        {img}
        <div className="description invisible w-[0px] h-[0px] md:w-[450px] md:h-[225px] md:absolute md:visible md:flex md:flex-col md:items-start md:p-4 md:justify-center md:bottom-0 rounded-[10px]">
          <div className="flex flex-col justify-center items-start">
            {label}
            <h1 className="my-2 font-bold text-[20px]">{title}</h1>
            <p className="text-left text-[15px]">{description}</p>
            <button className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center p-2 my-4">
              <p className="mx-2 font-bold">See case study</p>{" "}
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="visible w-[200px] h-[200px] md:invisible md:w-[0px] md:h-[0px]">
          <h1 className="mb-4 font-bold text-2xl md:mb-0">{title}</h1>
          <div className="flex flex-col justify-center">
            <p>{description}</p>
            <button className="bg-[#2f6690] rounded-[10px] text-[#d9dcd6] flex justify-center items-center p-2 mx-3 my-4 md:mx-0 md:p-0">
              <p className="mx-2 font-bold md:mx-0">See case study</p>{" "}
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
