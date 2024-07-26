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

  return (
    <div>
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
        <h1 className="bg-opacity-60 p-2 font-medium shadow-sm bg-slate-50 rounded-[10px]">
          Star Inventory Systems is an inventory management system for small
          businesses. This application was made to keep track of inventory,
          dynamically update pricing and help with quoting and onboarding of new
          staff.
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default StarInventoryPage;
