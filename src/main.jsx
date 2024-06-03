import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// Import Pages
import Landing from "./pages/Landing";
import GraphicDesign from "./pages/GraphicDesign";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import Illustrations from "./pages/Illustrations";
import Error from "./pages/Error";
import BaketomoInfoPage from "./pages/BaketomoInfoPage";

// Page routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "web-dev",
        element: <FullStackDevelopment />,
      },
      {
        path: "illustrations",
        element: <Illustrations />,
      },
      {
        path: "BaketomoInfoPage",
        element: <BaketomoInfoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
