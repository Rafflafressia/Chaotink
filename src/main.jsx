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
import Baketomo from "./components/CaseStudies/BaketomoInfoPage.jsx";
import StarInventory from "./components/CaseStudies/StarInventoryPage.jsx";
import PremierCustom from "./components/CaseStudies/PremierCustomPage.jsx";
import Answerables from "./components/CaseStudies/AnswerablesPage.jsx";

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
        path: "Answ",
        element: <Answerables />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
