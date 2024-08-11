import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// Import Main Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import CaseStudies from "./components/CaseStudies/CaseStudies.jsx";

// Case Studies
import Baketomo from "./components/CaseStudies/BaketomoInfoPage.jsx";
import StarInventory from "./components/CaseStudies/StarInventoryPage.jsx";
import PremierCustom from "./components/CaseStudies/PremierCustomPage.jsx";
import Answerables from "./components/CaseStudies/AnswerablesPage.jsx";

// Portfolio Pages
import Illustrations from "./components/Portfolio/Illustrations.jsx";
import GraphicDesign from "./components/Portfolio/GraphicDesign.jsx";
import WebDev from "./components/Portfolio/FullStackWebDevelopment.jsx";

// Page routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "case-studies",
        element: <CaseStudies />,
      },
      {
        path: "Bake",
        element: <Baketomo />,
      },
      {
        path: "Star",
        element: <StarInventory />,
      },
      {
        path: "Prem",
        element: <PremierCustom />,
      },
      {
        path: "Answ",
        element: <Answerables />,
      },
      {
        path: "graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "web-dev",
        element: <WebDev />,
      },
      {
        path: "illustrations",
        element: <Illustrations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
