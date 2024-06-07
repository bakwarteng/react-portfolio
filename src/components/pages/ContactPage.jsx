import { useState, useEffect } from "react";
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from "react-router-dom";
import Contact from "../Contact"



export default function ContactPage() {
  const [user, setUser] = useState({});

  // The useParams hook will yield an object. Its keys match the parameters defined on each route. Its values match the current URL value in those parameter locations
  const { id } = useParams();

  const fetchData = () => {
 
const { data } =  localStorage.getItem
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div>
        
       <Contact/>
      </div>
    
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        < Link to="/">← Go Back</Link>
      </footer>
    </>
  );
}

