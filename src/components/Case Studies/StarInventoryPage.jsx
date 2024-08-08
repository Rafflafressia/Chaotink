import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo } from "react";

import Carousel from "../Carousel";
import BacktoTop from "../ScrollToTopButton";

import StarBG from "../../assets/sil-bg.png";
import StarLogo from "../../assets/star-inventory-logo.svg";
import imgOne from "../../assets/star-add-employee.png";
import imgTwo from "../../assets/star-admin.png";
import imgThree from "../../assets/star-home.png";
import imgFour from "../../assets/star-new-product.png";
import imgFive from "../../assets/star-product-hover.png";
import imgSix from "../../assets/star-product-page.png";
import imgSeven from "../../assets/star-category-hover.png";

const StarInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingsOne = useMemo(() => "project text-2xl font-bold", []);
  const headingsTwo = useMemo(() => "font-medium", []);

  const bgStyle = useMemo(
    () => ({
      backgroundImage: `url(${StarBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    []
  );

 const images = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven];

  return (
    <div className="space-y-4 py-8 lg:mx-32 xl:mx-48 2xl:mx-[500px]">
      <BacktoTop />
      <div
        className="w-full p-4 flex flex-col space-y-4 items-center justify-center bg-opacity-30"
        id="home"
        style={bgStyle}
      >
        <img src={StarLogo} alt="Star Inventory Logo" className="w-10/12 xl:w-2/3" />
        <p className="bg-opacity-60 p-2 font-medium shadow-sm bg-slate-50 rounded-[10px]">
          Star Inventory Systems is an inventory management system for small
          businesses. This application uses RESTful API operations. Users are
          able to add, update, delete, and view inventory items. The system also
          allows for the creation of new users and the ability to update user
          information.
        </p>
      </div>

      <Section
        title="Target Audience"
        headingClass={headingsOne}
        content="The target audience for this application was for small print studios
        that see high inventory, high turnover and a low employee count."
      />

      <Section
        title="Project Goal"
        headingClass={headingsOne}
        content="Having worked in the print industry for over 10 years there are three
        things consistent across each studio. Poor inventory management, high
        employee turnover and steep learning curve. This application was meant
        to solve that issue by making it user friendly."
        subheading="The Solutions"
        subheadingClass={headingsTwo}
        listItems={[
          "An easy way for employees to update and track inventory; new and old.",
          "Preprogrammed calculations for pricing on inventory items to let employees look up pricing easily.",
          "User friendly design to allow new employees to quickly and easily access industry information.",
        ]}
      />

      <Section
        title="What We Achieved"
        headingClass={headingsOne}
        content="Utilizing a RESTful API, we dynamically populate a list of inventory items, each with clickable links directing users to detailed product pages. These pages display the product's price and description. User roles are categorized into managers and floor employees. Managers have the authority to add new employees, introduce new catalog items, and update pricing. Floor employees have access to browse the inventory and view detailed inventory information."
      />

      <Section
      title="Application Overview"
      headingClass={headingsOne}
      />
      <p className="italic text-gray-400 mx-8">Click and drag left and right to cycle through images (swipe on mobile)</p>
      <Carousel images={images}/>

      <Section
        title="Goals Moving Forward"
        headingClass={headingsOne}
        content="This application was originally designed and developed using Handlebars and MySQL. Looking ahead, a redesign utilizing modern frameworks such as React and GraphQL would significantly enhance its functionality and performance. Additionally, improving the user experience (UX) will streamline onboarding processes for both management and floor employees, making the system more intuitive and user-friendly."
      />

      <Section
        title="Deployed Application"
        headingClass={headingsOne}
        buttons={[
          { text: "Deployed Application", link: "https://star-inventory-logistics-36c6a2954dc4.herokuapp.com/login" },
          { text: "GitHub Repository", link: "https://github.com/Rafflafressia/Star-Inventory-Logistics" },
        ]}
      />
    </div>
  );
};

const Section = ({ title, headingClass, content, subheading, subheadingClass, listItems, buttons, image }) => (
  <div className="border-t-2 border-gray-300 py-4 m-4 space-y-4">
    <h1 className={headingClass}>{title}</h1>
    <div className={`flex flex-col items-center space-y-6 md:flex-row ${image ? 'lg:space-x-4' : ' '}`}>
      <div className="space-y-4">
        <p>{content}</p>
        {subheading && <h2 className={subheadingClass}>{subheading}</h2>}
        {listItems && (
          <ol className="list-decimal list-inside">
            {listItems.map((item, index) => (
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
          <img src={image} alt="Section visual representation" className="max-w-xs rounded-lg" />
        </div>
      )}
    </div>
  </div>
);

export default StarInventoryPage;
