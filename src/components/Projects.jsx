import React from "react";
import "../styles/projects.css";
import { pageIds } from "../utils/contants";
import { projectList } from "./projectsList";

export const Projects = () => {
  
  return (
    <>
      <h1 id="h1">Projects</h1>
      <div className="containerdiv" id={pageIds.projects}>
        {projectList.map((obj) => {
          return (
            <div className="projectsBox">
              <img src={obj.image} />
              <h4>{obj.para}</h4>
              <p>{obj.tech}</p>
              <div className="buttons">
                <button className="optionbtns">
                  {" "}
                  <a href={obj.githublink}>View on Github</a>
                </button>
                <button className="optionbtns">
                  {" "}
                  <a href={obj.liveLink}>Live</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
