import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import "./assets/styles/project.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./components/App";
import AboutMe from "./components/pages/AboutMe";
import PortfolioPage from "./components/pages/PortfolioPage";
import Resume from "./components/Resume";
import ContactPage from "./components/pages/ContactPage";
import ErrorPage from "./components/ErrorPage";


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/AboutMe",
        element: <AboutMe/>,
      },

      {
        path: "/portfoliopage",
        element: <PortfolioPage />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/ContactPage",
        element: <ContactPage />,
      },

      ,
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
