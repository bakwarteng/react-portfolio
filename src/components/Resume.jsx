import React from "react";
import style from "../assets/styles/main.css";

function Resume() {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "PostgresSQL",
    "NoSQL",
    "GraphQL",
    "Apollo Server",
    "Mongo",
    "MERN Stack",
    // Add more as needed
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-2">
        <section>
          <h2>Resume</h2>
          <a
            href="https://docs.google.com/document/d/1WCXJWq_6s1gw-h18fV37sBzGCgGyfPyRzyMhNnMceuY/edit?usp=sharing"
            
          >
            View My Resume
          </a>
          <h3>Proficiencies</h3>
          <ul id="resumelist">
            {proficiencies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
