import { useState } from "react";
import style from "../assets/styles/main.css"



export default
function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    {
    } if (inputType === "name") {
      setName(inputValue);
    } else {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
   
    

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
  ;
    setEmail("");
  };

  return (
    <div className="container text-center">
      <h1>Contact Me Here</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input className="emailinput"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        /> 
        
      
        <input className="label"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter name"
          required
        />
        <textarea className="textarea" name="message" id="message" rows="5" required></textarea>

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
