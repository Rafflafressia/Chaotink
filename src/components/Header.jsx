import Navbar from './Navbar';
import headerLogo from "../assets/portfolio-logo-header.svg"; 

const Header = () => {
    return (
        <header className="header border-b-2 lg:border-b-0 lg:h-[30px]">
            <img src={headerLogo} alt="Code Ink Header Logo" className="header-logo invisible w-[50px] md:visible md:w-[200px] mx-auto lg:m-5 lg:float-left lg:w-[200px]" />
            <Navbar />
        </header>
    );
}

export default Header;