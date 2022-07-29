import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (

    <div className="mainContactContainer">
    <form className="mainWrapper" onSubmit={handleSubmit}>
      <div className="nameWrapper">
        <label className="nameLabel" htmlFor="name">Name:</label>
        <input className="nameInput" type="text" id="name" required />
      </div>
      <div className="emailWrapper">
        <label className="emailLabel" htmlFor="email">Email:</label>
        <input className="emailInput" type="email" id="email" required />
      </div>
      <div className="messageWrapper">
        <label className="messageLabel" htmlFor="message">Message:</label>
        <textarea className="messageInput" id="message" required />
      </div>
      <div className="buttonWrapper">
      <button className="customButton" type="submit">{status}</button>
      </div>
    </form>

    </div>
  );
};

export default ContactForm;
