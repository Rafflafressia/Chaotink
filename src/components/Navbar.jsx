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
            className={`nav-link text-sm xl:text-3xl ${currentPage === url ? 'active' : ''} rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:xl:bg-transparent hover:text-red-700 lg:text-2xl`}
        >
            {title}
        </Link>
        ))}
        </nav>     
    );
    }
export default Navbar;