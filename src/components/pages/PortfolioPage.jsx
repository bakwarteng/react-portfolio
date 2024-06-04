import React from "react";
// import AboutMe from "./AboutMe";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";
import AboutMe from "./AboutMe";

const PortfolioPage = () => {
  return (
    <div>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="resume">
        <Resume />
      </section>
    </div>
  );
};

export default PortfolioPage;
