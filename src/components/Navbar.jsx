import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SiteLogo from "../assets/browser-icon.svg";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const currentPage = useLocation().pathname;

  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const githubURL = "https://github.com/Rafflafressia";
  const goToGithub = () => {
    window.open(githubURL, "_blank");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  const pages = [
    ["About", "about"],
    ["Portfolio", "portfolio"],
  ];

  return (
    <div className="fixed w-full z-50">
      <div className="w-full h-20 fixed [background:#b9bab7] shadow-lg"></div>
      <div className="h-[35px] flex justify-center items-center px-4 [background:#16425b] mx-auto md:h-[60px] drop-shadow-md">
        <div className="flex h-[35px] md:h-[60px] justify-center md:justify-between md:space-x-12 md:w-[1280px]">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={SiteLogo}
              alt="Site Logo"
              className="h-[20px] md:h-[25px] my-auto"
            />
            <p className="text-sm md:text-lg text-[#d9dcd6] flex items-center font-medium fixed md:relative invisible md:visible">
              Home
            </p>
          </Link>

          <nav className="flex space-x-12 invisible md:visible">
            {pages.map(([title, url]) => (
              <Link
                key={url}
                to={url}
                className={`nav-link text-sm md:text-lg text-[#d9dcd6] flex items-center font-medium`}
                title={title}
              >
                {title}
              </Link>
            ))}
          </nav>

          <TiThMenu
            className="text-[#d9dcd6] text-3xl cursor-pointer relative md:hidden"
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="menu absolute inset-0 justify-center items-center  bg-white">
              <button>
                <IoMdCloseCircleOutline
                  className="text-3xl absolute top-4 right-4 text-[#16425b]"
                  onClick={toggleMenu}
                />
              </button>
              <div className="bg-white h-screen w-screen rounded shadow-lg flex flex-col justify-center items-center">
                <nav className="flex flex-col text-center space-y-12 mt-4">
                  {pages.map(([title, url]) => (
                    <Link
                      key={url}
                      to={url}
                      className="text-3xl font-medium text-[#16425b]"
                      onClick={toggleMenu} // Close modal when link is clicked
                    >
                      {title}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-row pt-12 space-x-7">
                  <button onClick={goToLinkedIn}>
                    <SiLinkedin className="text-4xl text-[#16425b] cursor-pointer" />
                  </button>
                  <button onClick={goToGithub}>
                    <SiGithub className="text-4xl text-[#16425b] cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
