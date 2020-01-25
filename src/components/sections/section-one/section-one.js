import React, { useEffect, useRef } from "react";
import { Waypoint } from 'react-waypoint';

const SectionOne = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const sectionOneAnchor = useRef(null);
  const sectionOne = useRef(null);
  const sectionOnePinkWave = useRef(null);
  const sectionOneBlueWave = useRef(null);
  const sectionOneMessagePlain = useRef(null);
  const sectionOneMessageStroke = useRef(null);

  const moveSectionOneElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    sectionOnePinkWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sectionOneBlueWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sectionOneMessagePlain.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
    sectionOneMessageStroke.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = sectionOne.current;
    section.addEventListener("mousemove", moveSectionOneElements, false);
    return () => section.removeEventListener("mousemove", moveSectionOneElements, false);
  }, []);

  return (
    <div id="section-one" ref={sectionOne}>
      <Waypoint
        onEnter={() => handleWaypointEnter(sectionOneAnchor.current)}
        onLeave={() => handleWaypointLeave(sectionOneAnchor.current)}
      >
        <div className="section-one-anchor" ref={sectionOneAnchor}>
          <img className="pink-waves" ref={sectionOnePinkWave} width="200px" src="/pink-waves.svg" alt="wave" />
          <img className="blue-waves" ref={sectionOneBlueWave} width="200px" src="/blue-waves.svg" alt="wave" />
          <div className="message-plain" ref={sectionOneMessagePlain}>Discover the deep waters, the breathtaking cliffs, the shiny black sands and the romantic pink skies.</div>
          <div className="message-stroke" ref={sectionOneMessageStroke}>Santorini is a miracle of nature</div>
        </div>
      </Waypoint>
    </div>
  );
};

export default SectionOne;
