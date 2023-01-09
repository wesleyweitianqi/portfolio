import React from "react";
import "./contact.scss";
import { sendMail } from "../assets/emailkey";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <div className="space"></div>
      <div className="contact-container">
        <p className="topic">lets Connect!</p>
        <div className="bottom">
          <div className="left">
            <p>I'd love to hear from you!</p>
            <p>Please feel free to say hello and leave me a message.</p>
          </div>
          <div className="right">
            <div className="contact">
              <input
                type="name"
                id="fullName"
                name="full name"
                placeholder="Your Name*"
              />
              <input
                type="email"
                id="email_id"
                name="email id"
                placeholder="Your Email*"
              />
              <textarea id="message" placeholder="Leave a message" required />
              <input className="btn btn-primary" type="submit" value="Submit" onClick={sendMail}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
