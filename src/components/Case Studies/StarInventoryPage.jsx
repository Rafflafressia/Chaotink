import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";
import BaketomoNav from "../PresentationNav";
import Footer from "../Footer";
import Navbar from "../Navbar";

import StarBG from "../../assets/sil-bg.png";

const StarInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full py-12"
        id="home"
        style={{
          backgroundImage: `url(${StarBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ><h1>Star Inventory Systems is an inventory management system for small businesses. This application was made to keep track of inventory, dynamically update pricing and help with quoting and onboarding of new staff.</h1></div>

      <Footer />
    </div>
  );
};

export default StarInventoryPage;
