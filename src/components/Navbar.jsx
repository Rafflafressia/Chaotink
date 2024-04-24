import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const currentPage = useLocation().pathname;
    const pages = [
        ['Home', '/'],
        ['About', '/About'],
        ['Portfolio', '/Portfolio'],
        ['Contact', '/Contact'],
    ];
    return (
        <nav className="flex justify-center space-x-4 mx-auto lg:float-right lg:mt-12">
          {pages.map(([title, url]) => (
        <Link 
            key={url}
            to={url} 
            className={`nav-link text-sm xl:text-3xl ${currentPage === url ? 'active text-cyan-300' : 'text-white'} rounded-lg px-3 py-2 font-medium hover:xl:bg-transparent lg:text-2xl`}
        >
            {title}
        </Link>
        ))}
        </nav>     
    );
    }
export default Navbar;