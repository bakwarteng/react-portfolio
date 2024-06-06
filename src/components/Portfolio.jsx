import React from "react";
import quiz from "../assets/images/quiz-screenshot.png"
import projecttwo from "../assets/images/project-two-screenshot.png"
import notetakerapp from "../assets/images/notetakerapp.png"
import weatherdashboard from "../assets/images/weatherdashboard.png"
import bebeblogs from "../assets/images/bebeblogs.png"
import texteditor from "../assets/images/texteditor.png"


function Portfolio() {
  const projects = [
    {
      title: "QuizpicableMe",
      image: quiz,
      deployedLink: "https://sashuttle.github.io/QuizpicableMe/",
      githubLink: "https://github.com/Sashuttle/QuizpicableMe",
    },
    {
      title: "Happy Tails",
      image: projecttwo,
      deployedLink: "https://project-two-app-happy-tails.onrender.com",
      githubLink: "https://github.com/bakwarteng/project-two-app "
    },

    {
      title: "Note Taker ",
      image: notetakerapp,
      deployedLink: " https://note-taking-app-0yuk.onrender.com",
      githubLink: "https://github.com/bakwarteng/note-taking-app",
    },
    {
      title: "Weather Dashboard",
      image: weatherdashboard,
      deployedLink: "https://bakwarteng.github.io/weather-app/ ",
      githubLink: "https://github.com/bakwarteng/weather-app",
    },

    {
      title: "Bebe Blogs",
      image: bebeblogs,
      deployedLink: "https://bakwarteng.github.io/Bebe-blogs/",
      githubLink: "https://github.com/bakwarteng/Bebe-blogs",
    },

    {
      title: "Text Editor",
      image: texteditor,
      deployedLink: "https://bakwarteng.github.io/Bebe-blogs/",
      githubLink: "https://github.com/bakwarteng/Bebe-blogs",
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portimages" />
            <h3>{project.title}</h3>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
              <br></br>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
