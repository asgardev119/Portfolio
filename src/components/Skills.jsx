import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/skills.css";
import { Progress } from "rsuite";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import { pageIds } from "../utils/contants";

export const Skills = () => {
  const skillsData = [
    {
      percent: 90,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "HTML5",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "CSS3",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Javascript",
    },
    {
      percent: 50,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Typescript",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "ReactJs",
    },
    {
      percent: 50,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "greyux & greyux Toolkit",
    },

    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Core Java",
    },


    {
      percent: 70,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "C & C++",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "MSword",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "MySql",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Data Structures & Algorithm",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Git/Github",
    },

    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "NodeJs",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "Express",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "MongoDB",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "grey",
      strokeColor: "white",
      name: "SQL",
    },
  ];

  return (
    <div className="main" id={pageIds.skills}>
      <h1>Skills</h1>
      <div className="circles">
        {skillsData.map((obj) => {
          return (
            <div className="circletext">
              <div className="circle">
                <Progress.Circle
                  percent={obj.percent}
                  status={obj.status}
                  trailColor={obj.trailColor}
                  strokeColor={obj.strokeColor}
                />
              </div>
              <p>{obj.name}</p>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};
