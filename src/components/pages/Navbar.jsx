
export default function Nav({ links }) {
  return (
    // <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="headerlinks">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav justify-content-center">
            {links.map((link) => link)} 
          </ul>
        </div>
      </div>
    // </nav>
  );
}

