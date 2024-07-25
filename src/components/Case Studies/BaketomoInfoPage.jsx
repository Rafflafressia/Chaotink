import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";
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

  const goToBaketomoURL = () => {
    window.open(BaketomoURL, "_blank");
  };

  const images = [F5Minute_1, F5Minute_2, F5Minute_3];

  return (
    <div>
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
        <div className="glass flex flex-col justify-center items-center shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] bg-green-900 mx-4 md:mx-12 lg:mx-36 rounded-[10px] my-2 p-4 space-y-4">
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
      <div className="flex flex-row justify-center items-center lg:my-8 md:mx-12 xl:mx-36">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Summary
          </h3>
          <p className="text-[15px] mx-4 xl:text-[30px] xl:mx-8">
            Baketomo at its core is a game that allows players to collect
            monsters by exploring a dungeon. Each dungeon run gives players the
            opportunity to find unique monsters that can be captured.
          </p>
          <div className="flex flex-col justify-center items-start [background:#ebe9e9] m-2 p-4 rounded-[10px]">
            <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
              Game Loop
            </h3>
            <ol className="list-decimal list-inside text-[15px] mx-4 space-y-2 xl:text-[30px] xl:mx-8">
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
                Players will always get a chance to capture boss monster on
                beating the boss,
              </li>
              <li>
                Players can purchase items in the shop to help them through the
                dungeon.
              </li>
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
        <h1 className="text-3xl font-bold m-4 text-[#4a4e69] xl:text-[40px] md:mx-12 lg:mx-36">
          First 5-Minutes
        </h1>
        <Carousel images={images} />
      </div>
      <div className="flex flex-col border-t-[0.5px] border-gray p-2 m-2 xl:flex-row md:mx-12 lg:mx-12 xl:mx-36">
        <div>
          <h1 className="text-4xl font-bold text-[#4a4e69]">
            Design Pillars{" "}
            <p className="text-[20px]">Collect, Explore and Enhance</p>
          </h1>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Collect</h3>
            <p className="text-xl">
              Players can collect monsters by exploring the dungeon. Each
              monster has a unique set of stats and abilities that can be used
              to defeat other monsters.
            </p>
          </div>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Explore</h3>
            <p className="text-xl">
              Players can explore the dungeon by selecting a dungeon from the
              map. Each dungeon has a set of monsters that players can
              encounter.
            </p>
          </div>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Enhance</h3>
            <p className="text-xl">
              Players can enhance their play experience by purchasing items from
              the shop. Items from the shop can increase the rate for rare
              monsters or drops, heal active monster between encounters, or
              gaurantee a capture of a monster.
            </p>
          </div>
        </div>

        <img
          src={Monsters}
          alt="Monsters"
          className="p-2 md:w-10/12 xl:w-1/2"
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
        <div className="flex flex-col justify-center items-center lg:flex-row xl:mx-36">
          <img
            src={Signup}
            alt="Signup"
            className="invisible fixed lg:visible lg:relative md:h-1/2 lg:mx-12 rounded-2xl"
          />
          <div className="glass flex flex-col justify-center items-center bg-green-900 bg-opacity-10 mx-4 shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] rounded-[10px] my-2 p-4 space-y-4">
            <p
              className="text-white text-[17px] mx-4 lg:text-[20px] xl:text-[25px] xl:px-8"
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
              Please check out our scaled back playable demo. In this demo you
              can login, signup, choose a starter, go into a dungeon, fight a
              random boss monster and a chance at capturing it.
              <br />
              <br /> Players can also swap out their active monster from the
              Monster Closet and change their password.
              <br /> <br /> We are actively working on it and improving the game
              experience and hope to have a full functional product soon. Until
              then, please click on the logo below to check out Baketomo!
              <br />
              <br />
              Please note that we had a very limited time working on this
              project, it was designed to be played on an iPhone SE but will
              work fine on any other mobile device.
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
          <h1 className="text-4xl font-bold text-[#4a4e69]">
            Future Development Plans{" "}
            <p className="text-[20px]">Capture, Explore and Enhance</p>
          </h1>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Capture</h3>
            <p className="text-xl">
              Our current state of play gives the player the option to capture
              the monster simply by pressing a button and hoping that it shows
              up in the monster box. For future development, we want to refine
              the capture process by allowing players the option to make the
              monster submit to them by depleting their HP, negotiating a
              peaceful contract or a temporary alliance to be traded up for more
              unique loot at the end of the dungeon exploration.
            </p>
          </div>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Explore</h3>
            <p className="text-xl">
              Our current state of play the player goes into the dungeon and is
              engaged with a monster right away. For future development, we want
              the dungeon experience to be more of a dungeon crawler where
              players enter rooms, trigger traps or solve puzzles to make the
              process of finding monsters more rewarding.
            </p>
          </div>

          <div className="my-2">
            <h3 className="text-2xl font-bold">Enhance</h3>
            <p className="text-xl">
              Our current state of play the player is only able to purchase
              packs within our demo to obtain new monsters. For future
              development, we want the shop experience to be directly linked to
              the game. Items to heal monsters during exploration, items to
              reveal secrets in the dungeon, items to increase the odds of
              encountering specific types of monsters. This will give players
              incentives to venture into dungeons and explore them.
            </p>
          </div>
        </div>

        <img
          src={Monster2}
          alt="Monsters"
          className="p-2 md:w-10/12 xl:w-1/2"
        />
      </div>

      <Footer />
    </div>
  );
};

export default BaketomoInfoPage;
