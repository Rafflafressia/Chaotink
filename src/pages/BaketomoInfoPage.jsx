import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

import Carousel from "../components/Carousel";
import BackButton from "../components/BackButton";
import BaketomoNav from "../components/PresentationNav";

import HomeBG from "../assets/baketomo_pics/my-room-bg.png";
import BaketomoLogo from "../assets/baketomo_pics/baketomo-logo.svg";
import BaketomoLogin from "../assets/baketomo_pics/baketomo_login.png";
import Monsters from "../assets/baketomo_pics/monsters.svg";
import Monster2 from "../assets/baketomo_pics/handsy-girl.svg";
import Signup from "../assets/baketomo_pics/baketomo_signup.png";

const BaketomoInfoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BaketomoURL = "https://baketomo.onrender.com";

  const goToBaketomoURL = () => {
    window.open(BaketomoURL, "_blank");
  };
  return (
    <div className="flex justify-center">
      <div className="visible flex flex-col justify-center items-center h-screen w-screen lg:invisible lg:h-0 lg:w-0">
        <h1 className="text-[80px] text-white font-bold">Oh! I'm so sorry!</h1>
        <p className="text-3xl pt-12 text-white mx-12">
          It looks like you're trying to view this on your phone or tablet.
          Unfortunately, I haven't gotten around to optimizing this page for
          that yet. If you view this page on a computer, I promise it'll be
          worth your while!
        </p>
      </div>
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
      <div className="invisible h-0 w-0 lg:visible lg:h-screen lg:w-screen">
        <section
          className="py-4 h-[750px]"
          id="home"
          style={{
            backgroundImage: `url(${HomeBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-blur-[15px] h-[700px] backdrop-filter bg-green-900 bg-opacity-10 mx-4 shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] rounded-t-3xl my-2">
            <div className="relative">
              <img
                src={BaketomoLogo}
                alt="Baketomo Logo"
                className="w-1/2 lg:w-[900px] mx-auto pt-12"
              />
              <p
                className=" text-white text-4xl mx-36 p-12 text-center"
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
                It is a web game that allows players to collect unique monsters,
                go into a dungeon to fight monsters and purchase items from a
                shop. The game is built using the MERN development stack. This
                was worked on with a team of 3 developers within around 60
                hours. Front End Design and the monster designs were done by me!
              </p>
            </div>
          </div>
        </section>
        <section
          className="overview py-4 h-[775px] bg-white mt-0"
          id="overview"
        >
          <div className="flex justify-center bg-slate-50 mx-4 rounded-lg py-4">
            <div className="text-left ml-24 mt-4">
              <h1 className="text-6xl font-bold">Overview</h1>
              <h3 className="text-3xl font-bold leading-[100px]">Summary</h3>
              <p className="text-2xl">
                Baketomo at its core is a game that allows players to collect
                monsters by exploring a dungeon. Each dungeon run gives players
                the opportunity to find unique monsters that can be captured.
              </p>
              <h3 className="text-3xl font-bold leading-[100px]">Game Loop</h3>
              <p className="text-2xl">
                The game loop for Baketomo is as follows:
                <ol className="list-decimal list-inside">
                  <br />
                  <li>Players recieve a random starter monster,</li>
                  <li>Players select dungeon from the map to enter,</li>
                  <li>Players choose attacks to defeat random monsters,</li>
                  <li>
                    Players defeating a monster can give you a chance at
                    capturing monster,
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
                    Players can purchase items in the shop to help them through
                    the dungeon.
                  </li>
                </ol>
              </p>
            </div>

            <img
              src={BaketomoLogin}
              alt="Baketomo Page 1"
              className="w-[425px] border-2 border-black mx-[20px] rounded-[25px] shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] pb-4"
            />
          </div>
        </section>
        <section
          className="first-five-minutes h-[785px] bg-white my-0"
          id="first-five-minutes"
        >
          <div className="[background:#f2e9e4] py-6">
            {" "}
            <h1 className="ml-12 text-6xl font-bold mb-4 text-[#4a4e69]">
              First 5-Minutes
            </h1>
            <Carousel />
          </div>
        </section>
        <section
          className="design-pillars flex items-center h-[700px] bg-white"
          id="design-pillars"
        >
          <div>
            <h1 className="ml-12 text-6xl font-bold text-[#4a4e69]">
              Design Pillars{" "}
              <p className="text-[30px] pt-2">Collect, Explore and Enhance</p>
            </h1>

            <h3 className="text-2xl font-bold ml-12 mt-12">Collect</h3>
            <p className="text-xl ml-12">
              Players can collect monsters by exploring the dungeon. Each
              monster has a unique set of stats and abilities that can be used
              to defeat other monsters.
            </p>

            <h3 className="text-2xl font-bold ml-12 mt-12">Explore</h3>
            <p className="text-xl ml-12">
              Players can explore the dungeon by selecting a dungeon from the
              map. Each dungeon has a set of monsters that players can
              encounter.
            </p>

            <h3 className="text-2xl font-bold ml-12 mt-12">Enhance</h3>
            <p className="text-xl ml-12">
              Players can enhance their play experience by purchasing items from
              the shop. Items from the shop can increase the rate for rare
              monsters or drops, heal active monster between encounters, or
              gaurantee a capture of a monster.
            </p>
          </div>
          <div>
            <img src={Monsters} alt="Monsters" className="w-[2000px]" />
          </div>
        </section>
        <section
          className="demo py-4 h-[750px]"
          id="demo"
          style={{
            backgroundImage: `url(${HomeBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-blur-[15px] flex justify-center items-center h-[700px] backdrop-filter bg-green-900 bg-opacity-10 mx-4 shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)] rounded-t-3xl my-2">
            <img
              src={Signup}
              alt="Signup"
              className="w-1/2 lg:w-[900px] ml-12 rounded-2xl"
            />
            <div className="relative">
              <p
                className=" text-white text-2xl mx-12 p-12 text-center"
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
                <br /> <br /> We are actively working on it and improving the
                game experience and hope to have a full functional product soon.
                Until then, please click on the logo below to check out
                Baketomo!
                <br />
                <br />
                Please note that we had a very limited time working on this
                project, it was designed to be played on an iPhone SE but will
                work fine on any other mobile device.
              </p>
              <img
                src={BaketomoLogo}
                alt="Baketomo Logo"
                className="w-1/2 lg:w-[600px] mx-auto cursor-pointer"
                onClick={goToBaketomoURL}
              />
            </div>
          </div>
        </section>
        <section className="future-plans py-4 h-[750px]" id="future-plans">
          <h1 className="text-6xl font-bold text-[#4a4e69] ml-12  pt-14">
            Future Development Plans{" "}
            <p className="text-3xl pt-4">Capture, Explore and Enhance</p>
          </h1>
          <h3 className="text-2xl pt-12 ml-12 font-bold">Capture</h3>
          <div className="flex">
            <div className="w-[1000px] ">
              {" "}
              <p className="ml-12">
                Our current state of play gives the player the option to capture
                the monster simply by pressing a button and hoping that it shows
                up in the monster box. For future development, we want to refine
                the capture process by allowing players the option to make the
                monster submit to them by depleting their HP, negotiating a
                peaceful contract or a temporary alliance to be traded up for
                more unique loot at the end of the dungeon exploration.
              </p>
              <h3 className="text-2xl pt-12 ml-12 font-bold">Explore</h3>
              <p className="ml-12">
                Our current state of play the player goes into the dungeon and
                is engaged with a monster right away. For future development, we
                want the dungeon experience to be more of a dungeon crawler
                where players enter rooms, trigger traps or solve puzzles to
                make the process of finding monsters more rewarding.
              </p>
              <h3 className="text-2xl pt-12 ml-12 font-bold">Enhance</h3>
              <p className="ml-12">
                Our current state of play the player is only able to purchase
                packs within our demo to obtain new monsters. For future
                development, we want the shop experience to be directly linked
                to the game. Items to heal monsters during exploration, items to
                reveal secrets in the dungeon, items to increase the odds of
                encountering specific types of monsters. This will give players
                incentives to venture into dungeons and explore them.
              </p>
            </div>
            <img
              src={Monster2}
              alt="Monster2"
              className="w-[600px] mx-[20px]"
            />
          </div>
        </section>
      </div>
      <BackButton />
    </div>
  );
};

export default BaketomoInfoPage;
