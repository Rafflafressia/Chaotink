import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// Import Main Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";

// Case Studies
import Baketomo from "./components/Case Studies/BaketomoInfoPage.jsx";
import StarInventory from "./components/Case Studies/StarInventoryPage.jsx";
import PremierCustom from "./components/Case Studies/PremierCustomPage.jsx";

//Portfolio
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
        path: "Contact",
        element: <Contact />,
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
        path: "Illustrations",
        element: <Illustrations />,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "/web-dev",
        element: <WebDev />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
