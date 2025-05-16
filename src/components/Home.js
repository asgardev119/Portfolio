import React from "react";
import "../styles/home.css";
import { ParticlesBg } from ".";
import Typewriter from "typewriter-effect";
import { pageIds } from "../utils/contants";

export const Home = () => {
  return (
    <div className="maincont" id={pageIds.home}>
      <ParticlesBg />
      <div className="dev"></div>
      <div className="name">
        <h1 id="titleHead">
          {/* Hello Everyone, I'm */}
          <span>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "ReactJs  Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                  "Software Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </h1>
        <p id="text">
          <b id="p">
            Developed and maintained dynamic web applications using React.js,
            building user-friendly interfaces and integrating with backend
            services through Node.js, Express.js, and MongoDB to create
            scalable, full- stack solutions.
          </b>
        </p>
        <a
          href="/pdf/AsgarAnsari_Frontend_developer.pdf"
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
