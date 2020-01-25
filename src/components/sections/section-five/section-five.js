import React, { useRef, useEffect } from "react";
import { Waypoint } from 'react-waypoint';

const SectionFive = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const sectionFiveAnchor = useRef(null);
  const sectionFive = useRef(null);
  const sectionFivePinkWave = useRef(null);
  const sectionFiveMessage = useRef(null);

  const moveSectionFiveElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    sectionFivePinkWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sectionFiveMessage.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000005},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = sectionFive.current;
    section.addEventListener("mousemove", moveSectionFiveElements, false);
    return () => section.removeEventListener("mousemove", moveSectionFiveElements, false);
  }, []);

  return (
    <div id="section-five" ref={sectionFive}>
      <Waypoint
        onEnter={() => handleWaypointEnter(sectionFiveAnchor.current)}
        onLeave={() => handleWaypointLeave(sectionFiveAnchor.current)}
      >
        <div className="section-five-anchor" ref={sectionFiveAnchor}>
          <img ref={sectionFivePinkWave} className="blue-waves" width="200px" src="/pink-waves.svg" alt="wave" />
          <div className="message-plain" ref={sectionFiveMessage}>DiveInSantorini is a crew active on social media. Check our instagram or just greet us :</div>
          <button className="social-media-button">HELLO</button>
        </div>
      </Waypoint>
    </div>
  );
};

export default SectionFive;
