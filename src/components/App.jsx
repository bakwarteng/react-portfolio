import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import style from "../assets/styles/main.css"

import React from "react";
import AboutMe from "./pages/AboutMe";
import Footer from "./Footer";


const App = () => {
  return (
    <section>
    <div className="appbody">
      <Header />

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/PortfolioPage">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ContactPage">
            Contact
          </Link>
        </li>
      </ul>
      <card className="inbetween">
        <Outlet />
      </card>
    <div>

      <Footer />
      
      </div>
    </div>
    </section>
  );
};



export default App;


