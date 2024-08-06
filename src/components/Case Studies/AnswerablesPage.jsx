import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useCallback } from "react";

import Carousel from "../Carousel";
import BackButton from "../BackButton";
import BaketomoNav from "../PresentationNav";
import Footer from "../../components/Footer";
import Navbar from "../Navbar";

import HomeBG from "../../assets/answerables-hero.jpg";
import BaketomoLogo from "../../assets/baketomo_pics/baketomo-logo.svg";
import BaketomoLogin from "../../assets/baketomo_pics/baketomo_login.png";
import Monsters from "../../assets/baketomo_pics/monsters.svg";
import Monster2 from "../../assets/baketomo_pics/handsy-girl.svg";
import Signup from "../../assets/baketomo_pics/baketomo_signup.png";

import F5Minute_1 from "../../assets/baketomo_pics/baketomo_1.jpg";
import F5Minute_2 from "../../assets/baketomo_pics/baketomo_2.jpg";
import F5Minute_3 from "../../assets/baketomo_pics/baketomo_3.jpg";

const AnswerablesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BaketomoURL = "https://baketomo.onrender.com";

  const goToBaketomoURL = useCallback(() => {
    window.open(BaketomoURL, "_blank");
  }, [BaketomoURL]);

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${HomeBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    []
  );

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
    <div className="py-8">
      <div className="w-full flex justify-center" id="home">
        <img src={HomeBG} alt="Answerables logo hero" />
      </div>
      <div className="flex flex-col justify-center items-start lg:my-8 md:mx-12 xl:mx-36">
        <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
          Story of Answerables
        </h3>
        <p className="text-[15px] mx-4 xl:text-[30px] xl:mx-8">
          In the world of Answerables little aliens have found a new planet to
          inhabit, but know nothing about it. To properly settle on this new
          planet, these aliens need to learn about this new land and its people.
          The first of the new settlers meet the "Higher Beings" - beings that
          have long inhabited this planet and hold the secrets and knowledge of
          this new land. The Higher Beings and aliens quickly form an alliance
          where the Higher Beings pass on their knowledge of the land and its
          people. Allowing the aliens to interact and settle on this new world.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center lg:my-8 md:mx-12 xl:mx-36">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Summary
          </h3>
          <p className="text-[15px] mx-4 xl:text-[30px] xl:mx-8">
            Answerables was a game that takes the MMORPG concept and
            superimposes it into the education ecosphere. Answerables looked to
            bridge the gap between gaming and learning and allow teachers and
            students the ability to interact in a new and innovative way. We
            wanted to make learning fun for both students and teachers.
          </p>
          <div className="flex flex-col justify-center items-start bg-gray-200 m-2 p-4 rounded-[10px]">
            <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
              Game Loop - Teachers
            </h3>
            <p className="mx-4">
              Teachers, given the title of the "Higher Being" would be able to
              take their teaching curriculumn and adapt it into quests and sub
              quests. These quests could be locked in progression by teachers,
              ensuring that new quests could only be picked up by students who
              have completed the previous assignments. Sub quests and Quests
              could be added and updated as needed by teachers.
            </p>
            <h4 className="m-4 text-lg font-bold">Quests</h4>
            <ol className="mx-9 space-y-2 list-disc">
              <li>
                Quests are modules created by teachers that can be either
                assigned or posted in classrooms within the world of
                Answerables.
              </li>
              <li>
                The modules can be sheets, videos or websites that students can
                see within Answerables.
              </li>
              <li>
                Completing quests provide students with rewards, these rewards
                can be any combination of tokens, cosmetics or items that
                students can use within the game.
              </li>
            </ol>

            <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
              Game Loop - Students
            </h3>
            <p className="mx-4">
              Students select assignments created by their teachers and complete
              modules to receive rewards and cosmetics as they do so.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerablesPage;
