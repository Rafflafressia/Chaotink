import { SiLinkedin, SiGithub } from "react-icons/si";

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
    <footer className="flex mx-4 items-center justify-between p-2">
      <div>
        <p className="text-[#16425b] text-xl font-semibold">
          © 2024 Arkaw Banerjee
        </p>
      </div>
      <div className="flex flex-row pt-8 space-x-7">
        <button onClick={goToLinkedIn}>
          <SiLinkedin className="text-4xl text-[#16425b] cursor-pointer" />
        </button>
        <button onClick={goToGithub}>
          <SiGithub className="text-4xl text-[#16425b] cursor-pointer" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
