import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import style from "../assets/styles/project.css"
import projecttwo from "../assets/images/project-two-screenshot.png";
import notetakerapp from "../assets/images/notetakerapp.png";
import weatherdashboard from "../assets/images/weatherdashboard.png";
import bebeblogs from "../assets/images/bebeblogs.png";
import booksearchapi from "../assets/images/booksearchapi.png";
import rentride from "../assets/images/rentride.png";

function Portfolio() {
  const projects = [
    {
      title: "Rent and Ride",
      description:
        "Rent & Ride is a web application that enables users to rent cars for specific periods. It features car listings, reservation management, and user authentication for a seamless rental experience.",
      image: rentride,
      deployedLink: "https://rent-ride-jzpq.onrender.com/",
      githubLink: "https://github.com/14jjfenlason/car-rental",
    },

    {
      title: "Happy Tails",
      description:
        "Happy Tails is a website designed for animal lovers interested in adopting cats and dogs. Users can view available animals, access detailed information about each pet, and proceed with the adoption process through an interactive, user-friendly interface.",
      image: projecttwo,
      deployedLink: "https://project-two-app-happy-tails.onrender.com",
      githubLink: "https://github.com/bakwarteng/project-two-app ",
    },
    {
      title: "Note Taker ",
      description:
        "Note Taker is a web application that allows users to create, save, and view notes. It features an intuitive interface where users can manage their notes efficiently, ensuring quick access and organization of their important information.",
      image: notetakerapp,
      deployedLink: " https://note-taking-app-0yuk.onrender.com",
      githubLink: "https://github.com/bakwarteng/note-taking-app",
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather Dashboard is a web application that uses the Open Weather Map API to display the current weather and a 5-day forecast for searched cities. It features a user-friendly interface with real-time weather updates and forecast information.",

      image: weatherdashboard,
      deployedLink: "https://bakwarteng.github.io/weather-app/ ",
      githubLink: "https://github.com/bakwarteng/weather-app",
    },
    {
      title: "Bebe Blogs",
      description: "Bebe Blogs is a simple blog page where users can enter their username, blog title, and content. The information is stored locally and displayed on the posts page, providing a straightforward blogging experience using HTML, CSS, and JavaScript.",


      image: bebeblogs,
      deployedLink: "https://bakwarteng.github.io/Bebe-blogs/",
      githubLink: "https://github.com/bakwarteng/Bebe-blogs",
    },
    {
      title: "Book Search API",
      description:
        "Book Search API is a Node.js application that enables users to search for books, view details, and manage their favorite books. It features a secure login system and utilizes Mongoose, GraphQL, and Apollo Server for robust data handling and API management.",
      image: booksearchapi,
      deployedLink: "https://book-search-api-0dc1.onrender.com",
      githubLink: "https://github.com/bakwarteng/book-search-api ",
    },
  ];

  return (
    <section className="portcontent">
      {projects.map((project, index) => (
        <Card className="portcards" style={{ width: "20rem" }} key={index}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <a href={project.deployedLink}>Deployed Link</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={project.githubLink}>GitHub Link</a>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </section>
  );
}

export default Portfolio;
