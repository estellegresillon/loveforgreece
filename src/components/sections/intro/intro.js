import React, { useEffect, useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./intro.scss";

const Intro = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const introAnchor = useRef(null);
  const intro = useRef(null);
  const introPinkWave = useRef(null);
  const introBlueWave = useRef(null);
  const introMessagePlain = useRef(null);
  const introMessageStroke = useRef(null);

  const moveIntroElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    introPinkWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    introBlueWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    introMessagePlain.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
    introMessageStroke.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = intro.current;
    section.addEventListener("mousemove", moveIntroElements, false);
    return () => section.removeEventListener("mousemove", moveIntroElements, false);
  }, []);

  return (
    <div id="intro" ref={intro}>
      <Waypoint
        onEnter={() => handleWaypointEnter(introAnchor.current)}
        onLeave={() => handleWaypointLeave(introAnchor.current)}
      >
        <div className="intro-anchor" ref={introAnchor}>
          <img className="pink-waves" ref={introPinkWave} width="200px" src="/pink-waves.svg" alt="wave" />
          <img className="blue-waves" ref={introBlueWave} width="200px" src="/blue-waves.svg" alt="wave" />
          <div className="message-plain" ref={introMessagePlain}>Discover the deep waters, the breathtaking cliffs, the shiny black sands and the romantic pink skies.</div>
          <div className="message-stroke" ref={introMessageStroke}>Santorini is a miracle of nature</div>
        </div>
      </Waypoint>
    </div>
  );
};

export default Intro;
