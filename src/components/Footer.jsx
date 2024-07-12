import React from "react";




  const footerStyle = {
  
    position: "fixed",
    bottom: "0",
    alignContent: "center",
    width: "100%",

    backgroundColor: "rgb(250, 178, 172)",
    fontWeight: "bolder",
    textColor: "white",
    textAlign: "center",
    padding: "1px",
  };

function Footer() {
  return (
    <div>
      

      <footer style={footerStyle}>
        <a
          className="footerlinks"
          href="https://github.com/bakwarteng"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/beth-ann-kwarteng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
      </footer>
    </div>
  );

}

export default Footer;
