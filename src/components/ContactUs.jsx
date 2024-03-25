import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactus.css";
import { pageIds } from "../utils/contants";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59xy8ct",
        "template_qn5xxdf",
        form.current,
        "fYsmEvcDI0grYVa_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("mail send ✅");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="data" id={pageIds.contactUs}>
      <form ref={form} onSubmit={sendEmail}>
      <h2>contactUs</h2>

        <label>Name</label>
        <input type="text" name="from_name" autoComplete="off" />
        <label>Email</label>
        <input type="email" name="from_email" autoComplete="off" />
        <label>Message</label>
        <textarea name="message" autoComplete="off" rows="4" cols="2" />
        <input type="submit" value="Send" autoComplete="off" />
      </form>
    </div>
  );
};
