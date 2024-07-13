// This is a static page mocking an "About Us" section for our fake user data
import React from "react";
import style from "../../assets/styles/main.css"
import profilePic from "../../assets/images/profilepic.png";


export default function AboutMe() {
  
  return (
    <div className="aboutmebody">
      <div className="container pt-4">
        <header>
          <h1> About Me 
          <img className="imageStyle"src={profilePic} alt="profile pic" />
          </h1>
        </header>

        <p>
          <p>
            Hello! I'm Beth-Ann, a passionate web developer with a strong
            interest in creating dynamic and user-friendly web applications. I
            have experience in various web technologies including Mongo,
            Express, Node, React, HTML, JavaScript, and CSS.
          </p>
          <p>
            I recently completed the University of Texas' full-stack development
            bootcamp. During my studies, I developed a keen interest in full-stack
            development and have since worked on numerous projects to hone my
            skills.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and reading technical blogs. When I'm not
            coding, you can find me at Les Mills workout classes, playing the
            Sims 4, watching movies at the Star Cinema Grille, or at the
            Farmer's Market.
          </p>

          <p>
            I am always eager to learn and take on new challenges. I believe in
            the power of technology to solve problems and improve lives, and I
            am excited to be a part of this ever-evolving field.
          </p>
        </p>
      </div>
    </div>
  );
}
