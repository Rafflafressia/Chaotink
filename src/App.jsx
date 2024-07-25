import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  const routeTitles = {
    "/": "Arkaw Banerjee | | Web Developer",
    "/about": "Arkaw Banerjee | | About",
    "/portfolio": "Arkaw Banerjee | | Portfolio",
    "/contact": "Arkaw Banerjee | | Contact",
    "/Baketomo": "Arkaw Banerjee - Baketomo Case Study",
  };

  const title =
    routeTitles[location.pathname] || "Arkaw Banerjee | | Web Developer";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
