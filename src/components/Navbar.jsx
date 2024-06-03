import { Link, useLocation } from "react-router-dom";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const currentPage = useLocation().pathname;
  const pages = [
    [
      "About",
      "#about",
      <HiMiniInformationCircle size={60} className="nav-icon" />,
    ],
    ["Portfolio", "#portfolio", <CgMenuGridR size={60} className="nav-icon" />],
    ["Contact", "#contact", <IoMdContact size={60} className="nav-icon" />],
  ];
  return (
    <nav className="flex justify-center w-0 h-0 invisible space-x-4 mx-auto md:w-full md:visible md:space-x-12 border-b-2 border-green-800 pb-32">
      {pages.map(([title, url, img]) => (
        <a
          key={url}
          href={url}
          className={`nav-link hover:scale-125 ease-in duration-150 text-sm xl:text-3xl text-[#36DCA0] flex justify-center items-center rounded-full font-medium [background:#106f4c] w-[90px] h-[90px]`}
          title={title}
        >
          {img}
        </a>
      ))}
    </nav>
  );
};
export default Navbar;
