import React, { useRef, useEffect } from "react";
import { Waypoint } from 'react-waypoint';

const SectionFour = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const sectionFourAnchor = useRef(null);
  const sectionFour = useRef(null);
  const sectionFourPinkWave = useRef(null);
  const sectionFourMessage = useRef(null);

  const moveSectionFourElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    sectionFourPinkWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sectionFourMessage.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000005},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = sectionFour.current;
    section.addEventListener("mousemove", moveSectionFourElements, false);
    return () => section.removeEventListener("mousemove", moveSectionFourElements, false);
  }, []);

  return (
    <div id="section-four" ref={sectionFour}>
      <Waypoint
        onEnter={() => handleWaypointEnter(sectionFourAnchor.current)}
        onLeave={() => handleWaypointLeave(sectionFourAnchor.current)}
      >
        <div className="section-four-anchor" ref={sectionFourAnchor}>
          <img ref={sectionFourPinkWave} className="blue-waves" width="200px" src="/pink-waves.svg" alt="wave" />
          <div className="message-plain" ref={sectionFourMessage}>DiveInSantorini is a crew active on social media. Check our instagram or just greet us :</div>
          <button className="social-media-button">HELLO</button>
        </div>
      </Waypoint>
    </div>
  );
};

export default SectionFour;
