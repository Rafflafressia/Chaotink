import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useCallback } from "react";

import Carousel from "../Carousel";
import BacktoTop from "../ScrollToTopButton";
import BaketomoNav from "../PresentationNav";
import Footer from "../../components/Footer";
import Navbar from "../Navbar";

import HomeBG from "../../assets/baketomo_pics/my-room-bg.png";
import BaketomoLogo from "../../assets/baketomo_pics/baketomo-logo.svg";
import BaketomoLogin from "../../assets/baketomo_pics/baketomo_login.png";
import Monsters from "../../assets/baketomo_pics/monsters.svg";
import Monster2 from "../../assets/baketomo_pics/handsy-girl.svg";
import Signup from "../../assets/baketomo_pics/baketomo_signup.png";

import F5Minute_1 from "../../assets/baketomo_pics/baketomo_1.jpg";
import F5Minute_2 from "../../assets/baketomo_pics/baketomo_2.jpg";
import F5Minute_3 from "../../assets/baketomo_pics/baketomo_3.jpg";

const BaketomoInfoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BaketomoURL = "https://baketomo.onrender.com";

  const goToBaketomoURL = useCallback(() => {
    window.open(BaketomoURL, "_blank");
  }, [BaketomoURL]);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${HomeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }), []);

  const textShadowStyle = `
    -1px -1px 2px #023047,  
    1px -1px 2px #023047,
    -1px  1px 2px #023047,
    1px  1px 2px #023047,
    -2px -2px 4px #023047,  
    2px -2px 4px #023047,
    -2px  2px 4px #023047,
    2px  2px 4px #023047
  `;

  const images = [F5Minute_1, F5Minute_2, F5Minute_3];

  return (
    <div className="py-8 xl:mx-72">
      <BacktoTop />
      <div className="w-full py-12" id="home" style={backgroundStyle}>
        <div className="glass flex flex-col justify-center items-center shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] bg-green-900 mx-4 md:mx-12 lg:mx-36 rounded-[10px] my-2 p-4 space-y-4">
          <img src={BaketomoLogo} alt="Baketomo Logo" className="w-10/12 sm:w-2/3" />
          <p className="text-white text-[17px] mx-4 lg:text-[25px] xl:text-[35px]" style={{ textShadow: textShadowStyle }}>
            Baketomo is a project I worked on during my <span className="text-yellow-300">University of Toronto Full Stack Development Bootcamp.</span> It is a web game that allows players to collect unique monsters, go into a dungeon to fight monsters and purchase items from a shop. The game is built using the MERN development stack. This was worked on with a team of 3 developers within around 60 hours. Front End Design and the monster designs were done by me!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center lg:my-8 md:mx-12 xl:mx-16">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">Summary</h3>
          <p className="text-[15px] mx-4 xl:text-[20px] xl:mx-8">
            Baketomo at its core is a game that allows players to collect monsters by exploring a dungeon. Each dungeon run gives players the opportunity to find unique monsters that can be captured.
          </p>
          <div className="flex flex-col justify-center items-start bg-gray-200 m-2 p-4 rounded-[10px]">
            <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">Game Loop</h3>
            <ol className="list-decimal list-inside text-[15px] mx-4 space-y-2 xl:text-[20px] xl:mx-8">
              <li>Players receive a random starter monster,</li>
              <li>Players select a dungeon from the map to enter,</li>
              <li>Players choose attacks to defeat random monsters,</li>
              <li>Defeating a monster gives a chance to capture it,</li>
              <li>Players encounter a boss monster after a set number of encounters,</li>
              <li>Players always have a chance to capture the boss monster upon defeating it,</li>
              <li>Players can purchase items in the shop to help them through the dungeon.</li>
            </ol>
          </div>
        </div>
        <img
          src={BaketomoLogin}
          alt="Baketomo Page 1"
          className="invisible fixed mx-8 lg:relative lg:visible lg:w-3/12 xl:w-5/12 lg:border-2 lg:border-black lg:rounded-[25px] lg:shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="border-t-[0.5px] border-gray p-2 m-2">
        <h1 className="text-3xl font-bold m-4 text-[#4a4e69] xl:text-[40px] md:mx-12 lg:mx-36">First 5-Minutes</h1>
        <p className="italic text-gray-400 mx-36">Click and drag left and right to cycle through images (swipe on mobile)</p>
        <Carousel images={images} />
      </div>
      <div className="flex flex-col border-t-[0.5px] border-gray p-2 m-2 xl:flex-row md:mx-12 lg:mx-12 xl:mx-36">
        <div>
          <h1 className="text-4xl font-bold text-[#4a4e69]">Design Pillars <p className="text-[20px]">Collect, Explore, and Enhance</p></h1>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Collect</h3>
            <p className="text-xl">Players can collect monsters by exploring the dungeon. Each monster has unique stats and abilities to defeat other monsters.</p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Explore</h3>
            <p className="text-xl">Players can explore the dungeon by selecting a dungeon from the map. Each dungeon has a set of monsters that players can encounter.</p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Enhance</h3>
            <p className="text-xl">Players can enhance their experience by purchasing items from the shop. Items can increase the rate for rare monsters or drops, heal active monsters between encounters, or guarantee monster captures.</p>
          </div>
        </div>
        <img src={Monsters} alt="Monsters" className="p-2 md:w-10/12 xl:w-1/2" />
      </div>
      <div className="w-full py-12" id="home" style={backgroundStyle}>
        <div className="flex flex-col justify-center items-center lg:flex-row xl:mx-36">
          <img
            src={Signup}
            alt="Signup"
            className="invisible fixed lg:visible lg:relative md:h-1/2 lg:mx-12 rounded-2xl"
          />
          <div className="glass flex flex-col justify-center items-center bg-green-900 bg-opacity-10 mx-4 shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] rounded-[10px] my-2 p-4 space-y-4">
            <p className="text-white text-[17px] mx-4 lg:text-[20px] xl:text-[25px] xl:px-8" style={{ textShadow: textShadowStyle }}>
              Please check out our scaled-back playable demo. In this demo, you can log in, sign up, choose a starter, go into a dungeon, fight a random boss monster, and capture it.
              <br /><br /> Players can also swap out their active monster from the Monster Closet and change their password.
              <br /><br /> We are actively working on improving the game experience and hope to have a fully functional product soon. Until then, please click on the logo below to check out Baketomo!
              <br /><br /> Please note that this project was designed to be played on an iPhone SE but will work fine on any other mobile device.
            </p>
            <img
              src={BaketomoLogo}
              alt="Baketomo Logo"
              className="w-10/12 sm:w-2/3 md:w-6/12 cursor-pointer"
              onClick={goToBaketomoURL}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-t-[0.5px] border-gray p-2 my-4 mx-2 lg:mx-12 xl:flex-row xl:mx-36">
        <div>
          <h1 className="text-4xl font-bold text-[#4a4e69]">Future Development Plans <p className="text-[20px]">Capture, Explore, and Enhance</p></h1>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Capture</h3>
            <p className="text-xl">
              Our current state of play allows players to capture monsters by pressing a button. For future development, we want to refine this process by allowing players to deplete the monster's HP, negotiate a contract, or form a temporary alliance for unique loot.
            </p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Explore</h3>
            <p className="text-xl">
              Currently, players engage with monsters immediately upon entering a dungeon. For future development, we want to create a more rewarding experience by adding rooms, traps, and puzzles.
            </p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Enhance</h3>
            <p className="text-xl">
              Currently, players can only purchase packs to obtain new monsters. For future development, we aim to link the shop experience to the game, offering items to heal monsters, reveal secrets, and increase the odds of encountering specific monsters.
            </p>
          </div>
        </div>
        <img src={Monster2} alt="Monsters" className="p-2 md:w-10/12 xl:w-1/2" />
      </div>
    </div>
  );
};

export default BaketomoInfoPage;