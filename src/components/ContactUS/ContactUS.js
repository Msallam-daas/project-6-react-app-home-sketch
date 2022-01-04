import { useState } from "react";
import Swal from "sweetalert2";
import "./ContactUS.css";

function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Save the data to local storage
    const data = {
      name: name,
      email: email,
      message: message,
    };

    if (name === "" || email === "" || message === "") {
      Swal.fire({
        icon: "error",
        title: "Error !",
        text: "Please fill all tje fileds",
      });
    } else {
      localStorage.setItem("contactForm", JSON.stringify(data));
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent",
        icon: "success",
      });
    }
    //Reset the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="fromContainer">
      <div className="form-wrap">
        <h1>Contact us</h1>
        <span className="line" />
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="formControl"
              value={name}
              onChange={onNameChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="EmailInput">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="formControl"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="messageInput">Message</label>
            <textarea
              className="formControlText"
              placeholder="Enter your message"
              value={message}
              onChange={onMessageChange}
            />
          </div>
          <button type="submit" className="SubBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUS;
