import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import BackToTop from "../components/ScrollToTopButton";

const Footer = () => {
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";

  const goToLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const githubURL = "https://github.com/Rafflafressia";
  const goToGithub = () => {
    window.open(githubURL, "_blank");
  };

  return (
    <footer className="flex flex-col">
      <div className="flex flex-row items-center justify-between p-4">
        <div>
          <Link
            to="/"
            className="text-[#16425b] lg:text-xl text-sm font-semibold"
          >
            Arkaw Banerjee
          </Link>
        </div>

        <BackToTop />
        <div className="flex flex-row space-x-4">
          <button onClick={goToLinkedIn}>
            <SiLinkedin className="text-2xl xl:text-4xl md:text-2xl text-[#16425b] cursor-pointer" />
          </button>
          <button onClick={goToGithub}>
            <SiGithub className="text-2xl xl:text-4xl md:text-2xl text-[#16425b] cursor-pointer" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
