import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";

import PremLogo from "../../assets/premier-logo.svg";
import PlayLogo from "../../assets/playsafe-logo.svg";
import imgOne from "../../assets/premier-truck-1.jpg";
import imgTwo from "../../assets/premier-truck-2.jpg";
import imgThree from "../../assets/premier-truck-3.jpg";
import imgFour from "../../assets/premier-truck-4.jpg";
import imgFive from "../../assets/truck-template.jpg";
import imgSix from "../../assets/truck-template2.jpg";
import imgSeven from "../../assets/Playsafe 1.jpg";
import imgEight from "../../assets/Playsafe 2.jpg";
import imgNine from "../../assets/Playsafe 3.jpg";
import imgTen from "../../assets/Premier 1.jpg";
import imgEleven from "../../assets/Premier 2.jpg";
import imgTwelve from "../../assets/Premier trailer 2.jpg";
import imgThirteen from "../../assets/Premier trailer 3.jpg";

const StarInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingsOne = useMemo(() => "project text-2xl font-bold", []);
  const headingsTwo = useMemo(() => "font-medium", []);

  const truckMockups = [imgOne, imgTwo, imgThree, imgFour];
  const truckImgs = [
    imgSeven,
    imgEight,
    imgNine,
    imgTen,
    imgEleven,
    imgTwelve,
    imgThirteen,
  ];

  return (
    <div className="space-y-4 lg:mx-32 xl:mx-48 2xl:mx-[500px]">
      <div
        className="w-full p-4 flex flex-col space-y-4 items-center justify-center bg-opacity-30"
        id="home"
      >
        <div className="flex flex-row flex-wrap justify-center items-center space-y-4">
          <img
            src={PremLogo}
            alt="Premier Custom Logo"
            className="w-10/12 xl:w-2/3"
          />
          <img
            src={PlayLogo}
            alt="Premier Custom Logo"
            className="w-10/12 xl:w-2/3"
          />
        </div>

        <p className="bg-opacity-50 p-2 font-medium shadow-sm bg-gray-200 rounded-[10px] xl:text-xl">
          Premier Custom Surfacing is a company that specializes in pour-in
          rubber surfaces. They also have a sister company, Playsafe Canada
          which specializes in playground safe surfaces. The client, Sam, asked
          to wrap 4 trucks and a trailer.
        </p>
      </div>

      <Section
        title="Research"
        headingClass={headingsOne}
        content="Before the design; research was conducted in two phases."
        subheading="Phase 1 - Understanding the client and their business"
        subheadingClass={headingsTwo}
        listItems={[
          "Consult with client on what they're vision is for the design.",
          "Go on client website and understand their business and the clientelle they are trying to reach.",
          "Look at previously designed vehicles to ensure consistency between vehicles.",
        ]}
        subheadingTwo="Phase 2 - Collecting information on the different vehicles"
        listItemsTwo={[
          "Understanding the different vehicles involved (i.e make and model of each truck, sizes of the trucks etc.).",
          "Acquiring templates of each truck.",
          "Designing a template for the trailer based on real life measurements.",
        ]}
        image={[imgFive, imgSix]}
      />

      <Section
        title="The Design"
        headingClass={headingsOne}
        content="Working with Sam from Premier Custom Surfacing, we came up with a bold design that used the brand colors respective to each company. Blue for Premier Custom Surfacing and Orange for Playsafe Canada. The following mockups are for 4 vehicles that are full wraps."
      />

      <Carousel images={truckMockups} />

      <Section title="Finished Product" headingClass={headingsOne} />

      <div className="flex flex-wrap">
        {truckImgs.map((img) => (
          <img
            src={img}
            alt="Section visual representation"
            className="max-w-md rounded-lg m-2"
          />
        ))}
        ;
      </div>
    </div>
  );
};

const Section = ({
  title,
  headingClass,
  content,
  subheading,
  subheadingClass,
  listItems,
  buttons,
  image,
  subheadingTwo,
  listItemsTwo,
}) => (
  <div className="border-t-2 border-gray-300 py-4 m-4 space-y-4">
    <h1 className={headingClass}>{title}</h1>
    <div
      className={`flex flex-col items-center space-y-6 md:flex-row ${
        image ? "lg:space-x-4" : " "
      }`}
    >
      <div className="space-y-4">
        <p>{content}</p>
        {subheading && <h2 className={subheadingClass}>{subheading}</h2>}
        {listItems && (
          <ol className="list-decimal list-inside space-y-4">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
        {subheadingTwo && <h2 className={subheadingClass}>{subheadingTwo}</h2>}
        {listItemsTwo && (
          <ol className="list-decimal list-inside space-y-4">
            {listItemsTwo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
        {buttons && (
          <div className="flex space-x-4 my-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-lg text-sm"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="flex-shrink-0">
          {image.map((img) => (
            <img
              src={img}
              alt="Section visual representation"
              className="max-w-xs rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default StarInventoryPage;
