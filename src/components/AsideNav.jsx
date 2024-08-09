import BackToTop from "../components/ScrollToTopButton"

const SubNav = ({ categories, onSelectCategory }) => {
  return (
    <aside className="fixed top-[125px] left-10 [background:#16425b] shadow-lg rounded-lg p-4 w-[220px]">
      <ul className="list-none flex flex-col justify-center items-start space-y-4">
        {categories.map((category, index) => (
          <li key={index} className="w-full">
            <button
              className="w-full text-left py-2 px-4 text-white rounded-lg hover:bg-blue-100 hover:text-black focus:outline-none transition duration-300 ease-in-out"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
        <BackToTop />
    </aside>
  );
};

export default SubNav;
