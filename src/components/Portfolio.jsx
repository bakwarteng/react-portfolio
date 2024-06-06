import React from "react";
import quiz from "../assets/images/quiz-screenshot.png"
import projecttwo from "../assets/images/project-two-screenshot.png"
function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: quiz,
      deployedLink: "https://sashuttle.github.io/QuizpicableMe/",
      githubLink: "https://github.com/Sashuttle/QuizpicableMe",
    },
    {
      title: "Project 2",
      image: projecttwo,
      deployedLink: "https://project-two-app-happy-tails.onrender.com",
      githubLink: "https://github.com/bakwarteng/project-two-app ",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
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
