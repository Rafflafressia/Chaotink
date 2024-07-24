import { useNavigate } from "react-router-dom";

const BaketomoNav = ({ sections }) => {
  const navigate = useNavigate();

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <nav className="mx-auto invisible md:visible md:m-2 md:p-2 space-x-2 fixed rounded-xl z-10 bg-slate-100 md:shadow-md">
      {sections.map(([url, title]) => (
        <a
          key={url}
          href={url}
          onClick={(event) => handleClick(event, id)}
          className="text-black px-2"
        >
          {title}
        </a>
      ))}
      <a className="pr-2 cursor-pointer" onClick={goBack}>
        Back to Site
      </a>
    </nav>
  );
};

export default BaketomoNav;
