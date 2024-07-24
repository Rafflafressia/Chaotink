import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";
import BaketomoNav from "../PresentationNav";

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

  const goToBaketomoURL = () => {
    window.open(BaketomoURL, "_blank");
  };


  const images = [F5Minute_1, F5Minute_2, F5Minute_3];

  return (
    <div>
      <div className="flex justify-center">
      <BaketomoNav
        sections={[
          ["#home", "Home"],
          ["#overview", "Overview"],
          ["#first-five-minutes", "First Five Minutes"],
          ["#design-pillars", "Design Pillars"],
          ["#demo", "Demo"],
          ["#future-plans", "Future Plans"],
        ]}
      />
      </div>
      <div
        className="w-full py-12"
        id="home"
        style={{
          backgroundImage: `url(${HomeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center backdrop-blur-[15px] backdrop-filter bg-green-900 bg-opacity-10 mx-4 md:mx-12 lg:mx-36 shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] rounded-[10px] my-2 p-4 space-y-4">
          <img
            src={BaketomoLogo}
            alt="Baketomo Logo"
            className="w-10/12 sm:w-2/3"
          />
          <p
            className="text-white text-[17px] mx-4 lg:text-[25px] xl:text-[35px]"
            style={{
              textShadow: `
                -1px -1px 2px #023047,  
                 1px -1px 2px #023047,
                -1px  1px 2px #023047,
                 1px  1px 2px #023047,
                -2px -2px 4px #023047,  
                 2px -2px 4px #023047,
                -2px  2px 4px #023047,
                 2px  2px 4px #023047`,
            }}
          >
            {" "}
            Baketomo is a project I worked on during my{" "}
            <span className=" text-yellow-300">
              University of Toronto Full Stack Development Bootcamp.
            </span>{" "}
            It is a web game that allows players to collect unique monsters, go
            into a dungeon to fight monsters and purchase items from a shop. The
            game is built using the MERN development stack. This was worked on
            with a team of 3 developers within around 60 hours. Front End Design
            and the monster designs were done by me!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center lg:my-8">
        <div>
        <h3 className="text-3xl font-bold m-4">Summary</h3>
        <p className="text-[15px] mx-4">
          Baketomo at its core is a game that allows players to collect monsters
          by exploring a dungeon. Each dungeon run gives players the opportunity
          to find unique monsters that can be captured.
        </p>
        <h3 className="text-3xl font-bold m-4">Game Loop</h3>
        <ol className="list-decimal list-inside text-[15px] mx-4 space-y-2">
          <li>Players recieve a random starter monster,</li>
          <li>Players select dungeon from the map to enter,</li>
          <li>Players choose attacks to defeat random monsters,</li>
          <li>
            Players defeating a monster can give you a chance at capturing
            monster,
          </li>
          <li>
            Players will encounter a boss monster after a set amount of
            encounters,
          </li>
          <li>
            Players will always get a chance to capture boss monster on beating
            the boss,
          </li>
          <li>
            Players can purchase items in the shop to help them through the
            dungeon.
          </li>
        </ol>
        </div>
        <img
          src={BaketomoLogin}
          alt="Baketomo Page 1"
          className="invisible fixed lg:relative lg:visible lg:w-3/12 lg:border-2 lg:border-black lg:mx-[20px] lg:rounded-[25px] lg:shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] pb-4"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold m-4">First 5-Minutes</h1>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default BaketomoInfoPage;
