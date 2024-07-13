import { useState } from "react";
import style from "../assets/styles/main.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      return;
    }

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.location.href = `mailto:bakwarteng@hotmail.com?subject=${subject}&body=${body}`;

    setName("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    // Implement email validation logic here
  };

  return (
    <div className="container text-center">
      <h1>Contact Me Here</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="emailinput"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="label"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter name"
          required
        />
        <textarea
          className="textarea"
          name="message"
          value={message}
          onChange={handleInputChange}
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
