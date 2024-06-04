import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import React from "react";
import AboutMe from "./pages/AboutMe";
import Footer from "./Footer";


// import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      {
        /* Your page content goes here */

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./AboutMe">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Resume">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              
              Contact
            </a>
          </li>
        </ul>
      }
<AboutMe/>
      <Footer />
    </div>
  );
};



export default App;


