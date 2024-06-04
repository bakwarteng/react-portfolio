import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "image1.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 2",
      image: "image2.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 3",
      image: "image3.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 4",
      image: "image4.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 5",
      image: "image5.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 6",
      image: "image6.jpg",
      deployedLink: "#",
      githubLink: "#",
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
