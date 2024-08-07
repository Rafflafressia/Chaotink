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
    "/Bake": "Arkaw Banerjee - Baketomo",
    "/Prem": "Arkaw Banerjee - Premier Custom Surfacing",
    "/Star": "Arkaw Banerjee - Star Inventory Logistics",
    "/Answ" : "Arkaw Banerjee - Answerables",
    "/illustrations" : "Arkaw Banerjee - Illustrations",
    "/graphic-design" : "Arkaw Banerjee - Graphic Design",
    "/web-dev" : "Arkaw Banerjee - Web Development", 
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
        <Footer />
      </main>
    </>
  );
}

export default App;
