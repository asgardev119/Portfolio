import React from "react";
import "../styles/about.css";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { pageIds } from "../utils/contants";

export const Aboutus = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  const btnlogo = [
    {
      logo: <FaFacebook />,
      onNav: () => handleClick("https://www.facebook.com/iasgaransari"),
    },
    {
      logo: <FaGithub />,
      onNav: () => handleClick("https://github.com/asgaransari19"),
    },
    {
      logo: <FaInstagram />,
      onNav: () => handleClick("https://www.instagram.com/thefuture.dev/"),
    },
    {
      logo: <FaLinkedin />,
      onNav: () => handleClick("https://www.linkedin.com/in/asgar-ansari"),
    },
  ];

  return (
    <div className="about" id={pageIds.about}>
      <h1>About Us</h1>
      <div className="imgbox"></div>
      <div className="textbox">
        <p>
          Hey there! I'm <b>Asgar Ansari</b>, a recent graduate with a Bachelor
          of Technology in Computer Science and Engineering from{" "}
          <b>IES University</b>, Bhopal. I completed my degree with a strong
          academic performance, achieving an SGPA of <b>8.56</b> in my final
          semester. My goal is to launch my career as a MERN stack developer,
          focusing on both frontend and backend development. I am passionate
          about designing, planning, and building complex, scalable
          applications. I love exploring new technologies, especially in the
          realm of modern web development, and I continuously improve my skills
          through books, documentation, and YouTube tutorials. I am fluent in
          both Hindi and English and eager to contribute to innovative projects
          that challenge and inspire me.
        </p>

        <div className="btns">
          {btnlogo.map((obj) => {
            return <button onClick={obj.onNav}>{obj.logo}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
