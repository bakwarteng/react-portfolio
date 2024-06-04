import React from "react";


  const footerStyle ={

 position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: 'lightpink',
  fontWeight:'bolder',
  color: 'white',
  textAlign: 'center',
  padding: '10px'



  }

function Footer() {
  return (
   <div>
    <footer style={footerStyle}>
 
      <a
        href="https://github.com/bakwarteng"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <br />
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <br />
      <a
        href="https://stackoverflow.com/users/youruserid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stack Overflow
      </a>
    </footer>
    </div>
    
  );

}

export default Footer;
