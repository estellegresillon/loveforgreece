import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./footer.scss";

const Footer = () => {
  const logoRef = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  }

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  }

  return (
    <div id="footer">
      <Waypoint
        onEnter={() => handleWaypointEnter(logoRef.current)}
        onLeave={() => handleWaypointLeave(logoRef.current)}
      >
        <div className="logo-anchor logo" ref={logoRef}>
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
