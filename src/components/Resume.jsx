import React from "react";

function Resume() {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "SQL",
    "Mongo"
    // Add more as needed
  ];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path-to-resume." download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
