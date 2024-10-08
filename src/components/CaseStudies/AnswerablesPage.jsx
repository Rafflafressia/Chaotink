import { useEffect } from "react";
import SideNav from "../AsideNav";
import Carousel from "../Carousel";

import HomeBG from "../../assets/answerables/answerables-hero.jpg";
import ScreenshotOne from "../../assets/answerables/answerables-screenshot-1.png";
import ScreenshotTwo from "../../assets/answerables/answerables-screenshot-2.jpeg";
import ScreenshotThree from "../../assets/answerables/answerables-screenshots-3.png";
import ScreenshotFour from "../../assets/answerables/answerables-screenshots-4.png";
import ScreenshotFive from "../../assets/answerables/answerables-screenshots-5.png";
import ScreenshotSix from "../../assets/answerables/answerables-screenshot-6.png";
import Trailer from "../../assets/answerables/Answerables_Trailer.webm";

const AnswerablesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const answerablesScreens = [
    ScreenshotTwo,
    ScreenshotThree,
    ScreenshotFour,
    ScreenshotFive,
  ];

  return (
    <div className="py-8">
      <SideNav
        categories={[
          ["Baketomo", "Bake"],
          ["Star Inventory Logistics", "Star"],
          ["Premium Custom Surfacing", "Prem"],
          ["Answerables", "Answ"],
        ]}
      />
      <div className="w-full flex justify-center" id="home">
        <img src={HomeBG} alt="Answerables logo hero" />
      </div>
      <div className="lg:mx-36 xl:mx-52">
        <div className="flex flex-col justify-center items-start lg:my-4 md:mx-12 xl:mx-36">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Story of Answerables
          </h3>
          <p className="text-[15px] mx-4 xl:text-[30px] xl:mx-8">
            In the world of Answerables little aliens have found a new planet to
            inhabit, but know nothing about it. To properly settle on this new
            planet, these aliens need to learn about this new land and its
            people. The first of the new settlers meet the "Higher Beings" -
            beings that have long inhabited this planet and hold the secrets and
            knowledge of this new land. The Higher Beings and aliens quickly
            form an alliance where the Higher Beings pass on their knowledge of
            the land and its people. Allowing the aliens to interact and settle
            on this new world.
          </p>
        </div>
        <div className="border-t-2 border-gray flex flex-row justify-center items-center lg:my-8 md:mx-12 xl:mx-36">
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
              Summary
            </h3>
            <p className="text-[15px] mx-4 xl:text-[30px] xl:mx-8">
              Answerables was a game that takes the MMORPG concept and
              superimposes it into the education ecosphere. Answerables looked
              to bridge the gap between gaming and learning and allow teachers
              and students the ability to interact in a new and innovative way.
              We wanted to make learning fun for both students and teachers.
            </p>
            <div className="flex flex-col justify-center items-center bg-gray-200 m-2 p-4 rounded-[10px] 2xl:flex-row">
              <div className="mx-auto my-4 space-y-4">
                <h3 className="text-2xl font-bold xl:text-[40px]">
                  Game Loop - Teachers
                </h3>
                <p className="">
                  Teachers, given the title of the "Higher Being" would be able
                  to take their teaching curriculumn and adapt it into quests
                  and sub quests. These quests could be locked in progression by
                  teachers, ensuring that new quests could only be picked up by
                  students who have completed the previous assignments. Sub
                  quests and Quests could be added and updated as needed by
                  teachers.
                </p>
                <h4 className=" text-lg font-bold">Quests</h4>
                <ol className="mx-8 space-y-2 list-disc">
                  <li>
                    Quests are modules created by teachers that can be either
                    assigned or posted in classrooms within the world of
                    Answerables.
                  </li>
                  <li>
                    The modules can be sheets, videos or websites that students
                    can see within Answerables.
                  </li>
                  <li>
                    Completing quests provide students with rewards, these
                    rewards can be any combination of tokens, cosmetics or items
                    that students can use within the game.
                  </li>
                </ol>

                <h3 className="text-2xl font-bold xl:text-[40px] ">
                  Game Loop - Students
                </h3>
                <p className="">
                  Students select assignments created by their teachers and
                  complete modules to receive rewards and cosmetics as they do
                  so.
                </p>
              </div>
              <img
                src={ScreenshotFour}
                alt="Screenshot of Alien from Answerables"
                className="invisible fixed lg:relative lg:visible lg:w-3/6"
              />
            </div>
          </div>
        </div>
        <div className="xl:mx-36 border-t-2 border-gray">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Platform
          </h3>
          <p className="m-4 xl:m-8 xl:text-xl">
            Answerables was completely playable on PC as well as on Tablets.
          </p>
        </div>
        <div className="flex flex-col xl:mx-36 border-t-2 border-gray space-y-8">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Controls
          </h3>
          <div className="flex flex-col xl:flex-row justify-center mx-8 xl:mx-16">
            <img
              src={ScreenshotOne}
              alt="Screenshot of Screen"
              className="invisible fixed m-2 md:relative md:visible md:h-30 xl:w-4/12"
            />
            <div>
              <h4 className="m-4 xl:mx-8 md:text-2xl font-bold">
                Tablet Controls:
              </h4>
              <ol className="list-disc m-4 md:text-lg xl:mx-16 xl:text-2xl">
                <li>
                  Players have an onscreen joystick to move avatar forward,
                  backward and strafe left and right.
                </li>
                <li>Players can drag the screen to move camera view around.</li>
                <li>Tapping on objects lets players interact with them.</li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row-reverse justify-center mx-8 xl:mx-16">
            <img
              src={ScreenshotSix}
              alt="Screenshot of Screen"
              className="invisible fixed m-2 md:relative md:visible md:h-30 xl:w-4/12"
            />
            <div>
              <h4 className="m-4 xl:mx-8 md:text-2xl font-bold">
                Keyboard and Mouse Controls:
              </h4>
              <ol className="list-disc m-4 md:text-lg xl:mx-16 xl:text-2xl">
                <li>
                  Players can use WASD or the arrow keys to move their avatar
                  around.
                </li>
                <li>Mouse controls avatar movement by default.</li>
                <li>
                  Pressing the E key allows players to interact with objects.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="xl:mx-36 border-t-2 border-gray my-8">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Trailer
          </h3>
          <div className="flex flex-col items-center 2xl:flex-row">
            <div className="2xl:text-2xl">
              <p className="m-4 xl:m-8">
                This is a trailer for a prebuilt module based on the Grade 5
                Social Studies curriculumn where students learned about Egypt.
              </p>
              <p className="m-4 xl:m-8">
                In this module, students use the museum to travel back in time
                to Ancient Egypt where they learn how the villagers built their
                homes, pass their time and worshipped their pharoahs. Students
                learn about the Nile, Pyramids and Sphinx. As they complete the
                villagers request, they get access to more of the map and
                eventually party with the villagers.
              </p>
            </div>
            <video controls className="xl:w-1/2">
              <source src={Trailer} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="xl:mx-36 border-t-2 border-gray my-8 flex flex-col">
          <h3 className="text-3xl font-bold m-4 xl:text-[40px] xl:m-8">
            Production
          </h3>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center 2xl:flex-row">
              <div className="2xl:text-2xl">
                <p className="m-4 xl:m-8">
                  Unfortunately, Answerables was not able to hit shelves
                  officially. Here are a collection of images of Answerables and
                  what it could've been. You click and drag (or drag if you're
                  on mobile) to go through the screenshotsm in the carousel.
                </p>
              </div>
            </div>

            <div className="m-8 xl:w-1/2">
              <Carousel images={answerablesScreens} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerablesPage;
