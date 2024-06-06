// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link active" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-item" to="/AboutMe">
          About Us
        </Link>,
        <Link key={3} className="nav-link" to="/Resume">
          Resume
        </Link>,
        <Link key={4} className=" nav-itemportfolio" to="/portfoliopage">
          Portfolio
        </Link>,
        <Link key={5} className="nav-itemcontact " to="/ContactPage">
          Contact
        </Link>,
      ]}
    />
  );
}
