import React from "react";
import { Waypoint } from 'react-waypoint';

import "./footer.scss";

const Footer = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <div id="footer">
      <Waypoint
        onEnter={() => handleWaypointEnter(".logo-anchor")}
        onLeave={() => handleWaypointLeave(".logo-anchor")}
      >
        <div className="logo-anchor logo">
          <span>
            <i className="fas fa-sun" />
            <span>DIVE</span>
            <span style={{ fontWeight: 100 }}>IN</span>
          </span>
          SANTORINI
        </div>
      </Waypoint>
    </div>
  );
};

export default Footer;
