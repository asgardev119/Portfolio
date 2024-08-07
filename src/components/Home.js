import React from "react";
import "../styles/home.css";
import { ParticlesBg } from ".";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { pageIds } from "../utils/contants";

export const Home = () => {
  return (
    <div className="maincont" id={pageIds.home}>
      <ParticlesBg />
      <div className="dev"></div>
      <div className="name">
        <h1 id="titleHead">
          Hello everyone, I am
          <span>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "a ReactJs  Developer",
                  "a Frontend Developer",
                  "a Software Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </h1>
        <p id="text">
          <b id="p">
            {" "}
            I aim to launch my career as a proficient MERN stack developer,
            specializing in both frontend and backend intricacies. I'm dedicated
            to refining my skills to contribute effectively to the design,
            planning, and development phases of complex applications.{" "}
          </b>
          I am passionate about new technologies and always wish to know more
          about them. I have a keen interest in modern web technologies and I
          learn them by reading books & documentation and watching YouTube
          videos. I can speak Hindi, English.
        </p>
        <a
          href="/pdf/AsgarAnsari-ReactJs Developer.pdf"
          download="asgaransari-Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button>Hire me</button>
        </a>
      </div>
    </div>
  );
};
