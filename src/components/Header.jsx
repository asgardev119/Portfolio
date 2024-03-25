import React, { useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { navMenus } from "../utils/navMenus";
import { isPathActive } from "../utils/util";

export const Header = () => {
  const [activePath, setActivePath] = useState(window.location.hash || "");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = (link) => {
    setActivePath(link);
    setIsNavOpen(false);
  };

  return (
    <div className="root">
      <input type="checkbox" name="checkbox" id="check" checked={isNavOpen} />
      <label for="check" className="checkBtn" onClick={toggleNav}>
        <FontAwesomeIcon icon={isNavOpen ? faXmark : faBars} size="xl" />
      </label>

      <label className="logo">𝝞𝝖SᏵ𝝖Ɍ</label>

      <ul className={isNavOpen ? "open" : ""}>
        {navMenus.map(({ text, link }) => {
          return (
            <li key={link} onClick={() => handleNavItemClick(link)}>
              <a href={link} className={activePath === link ? "active" : ""}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
