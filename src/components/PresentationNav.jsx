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
    <nav className="lg:space-x-4 lg:fixed  lg:mt-2 lg:rounded-xl lg:p-2 lg:z-10 lg:bg-slate-100 ">
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
