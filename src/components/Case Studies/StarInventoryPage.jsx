import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";
import BaketomoNav from "../PresentationNav";
import Footer from "../Footer";
import Navbar from "../Navbar";

import StarBG from "../../assets/sil-bg.png";
import StarLogo from "../../assets/star-inventory-logo.svg";

const StarInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingsOne = "project text-2xl font-bold";
  const headingsTwo = "font-medium";
  
  return (
    <div className="space-y-4">
      <div
        className={`w-full p-4 flex flex-col space-y-4 items-center justify-center bg-opacity-30`}
        id="home"
        style={{
          backgroundImage: `url(${StarBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={StarLogo} alt="Star Inventory Logo" className="w-10/12" />
        <p className="bg-opacity-60 p-2 font-medium shadow-sm bg-slate-50 rounded-[10px]">
          Star Inventory Systems is an inventory management system for small
          businesses. This application uses RESTful API operations. Users are
          able to add, update, delete, and view inventory items. The system also
          allows for the creation of new users and the ability to update user
          information.
        </p>
      </div>
      <div className="border-t-2 border-gray-300 py-4 m-4 space-y-4">
        <h1 className={headingsOne}>Target Audience</h1>
        <p>
          The target audience for this application was for small print studios
          that see high inventory, high turnover and a low employee count.
        </p>

        <h1 className={headingsOne}>Project Goal</h1>
        <p>
          Having worked in the print industry for over 10 years there are three
          things consistent across each studio. Poor inventory management, high
          employee turnover and steep learning curve. This application was meant
          to solve that issue by making it user friendly
        </p>

        <h2 className={headingsTwo}>The Solutions</h2>
        <ol className="list-decimal list-inside">
          <li>
            An easy way for employees to update and track inventory; new and
            old,
          </li>
          <li>
            Preprogrammed calculations for pricing on inventory items to let
            employees look up pricing easily,
          </li>
          <li>
            User friendly design to allow new employees to quickly and easily
            access industry information.
          </li>
        </ol>
      </div>

      <div className="border-t-2 border-gray-300 py-4 m-4 space-y-4">
        <h2 className={headingsOne}>What We Achieved</h2>
      </div>

      <Footer />
    </div>
  );
};

export default StarInventoryPage;
