// This is a static page mocking an "About Us" section for our fake user data
import React from "react";
import style from "../../assets/styles/main.css"

export default function AboutMe() {
  
  return (
    <div className="aboutmebody">
    <div className="container pt-4">
      <h1> About Me👩🏾‍💻 </h1>
     
      <p>
        <p>
          Hello! I'm Beth-Ann, a passionate web developer with a strong interest
          in creating dynamic and user-friendly web applications. I have
          experience in various web technologies including JavaScript, React,
          HTML, JavaScript and CSS.
        </p>
        <p>
          I am a student of the University of Texas' fullstack development
          bootcamp During my studies, I developed a keen interest in front-end
          development and have since worked on numerous projects to hone my
          skills. My expected graduation date is June 17, 2024.
        </p>
        <card className= "aboutmecard">
          In my free time, I enjoy exploring new technologies, contributing to
          open-source projects, and writing technical blogs. When I'm not
          coding, you can find me at Les Mills workout classes, the Star Cinema
          Grille, or at the Farmer's Market.
        </card>


        <card className ="aboutmecard"> 
          I am always eager to learn and take on new challenges. I believe in
          the power of technology to solve problems and improve lives, and I am
          excited to be a part of this ever-evolving field.
 




    
        </card>
      </p>
      </div>
    </div>
    
  );
}
