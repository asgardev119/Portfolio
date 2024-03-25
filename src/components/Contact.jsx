import React, { useState } from "react";
import "../styles/contact.css";
const Contact = () => {
  const [userValue, userSetValue] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  // const [formValue , setFormValue] = useState()

  function handleSubmit() {}

  function handleChange(e) {
    const { id, value } = e.target;
    userSetValue({ ...userValue, [id]: value });
    if (userValue.name == " ") {
      alert("name Requirred");
    }
  }
  return (
    <div className="maincont">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={userValue.name}
          placeholder="Enter your name"
          onChange={handleChange}
          id="name"
        />
        <label>Enter your email: </label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          value={userValue.email}
          placeholder="Enter your gmail"
          id="email"
        />
        <label>message</label>
        <textarea
          name="message"
          onChange={handleChange}
          value={userValue.message}
          cols=""
          rows="3"
          id="message"
        ></textarea>
        <br />
        <br />
        <p>name: {userValue.name}</p>
        <p>email: {userValue.email}</p>
        <p> message: {userValue.message}</p>
        <button type="submit"> submit</button>
      </form>
      <div className="dev"></div>
    </div>
  );
};

export default Contact;
