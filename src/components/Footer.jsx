import React from "react";




  const footerStyle = {
  
   position: "fixed",
   bottom: "0",
   width: "100%",    
   maxHeight:"41px",
   

    backgroundColor: "rgb(250, 178, 172)",
    textAlign: "center",
    
  };

function Footer() {
  return (
    <div className="d-flex align-content-stretch flex-wrap">
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
