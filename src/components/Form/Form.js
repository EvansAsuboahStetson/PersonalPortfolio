import emailjs from "@emailjs/browser";
import "./Form.css";
import React, { useRef } from "react";

const Form = () => {
    console.log(process.env.REACT_APP_SERVICE_ID)
    console.log(process.env.REACT_APP_TEMPLATE_ID)
    console.log(process.env.REACT_APP_PUBLIC_ID)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent")
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" placeholder="Your Name" name="user_name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" name="user_email" />
        <label>Subject</label>
        <input type="text" placeholder="Email Subject" name="subject" />
        <label>Message</label>
        <textarea
          type="text"
          placeholder="Type Your Message here"
          name="message"
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
