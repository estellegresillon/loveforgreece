import React, { useRef, useEffect } from "react";
import { Waypoint } from 'react-waypoint';

import "./say-hello.scss";

const SayHello = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const sayHelloAnchor = useRef(null);
  const sayHello = useRef(null);
  const sayHelloPinkWave = useRef(null);
  const sayHelloMessage = useRef(null);

  const moveSayHelloElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    sayHelloPinkWave.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sayHelloMessage.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000005},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = sayHello.current;
    section.addEventListener("mousemove", moveSayHelloElements, false);
    return () => section.removeEventListener("mousemove", moveSayHelloElements, false);
  }, []);

  return (
    <div id="say-hello" ref={sayHello}>
      <Waypoint
        onEnter={() => handleWaypointEnter(sayHelloAnchor.current)}
        onLeave={() => handleWaypointLeave(sayHelloAnchor.current)}
      >
        <div className="say-hello-anchor" ref={sayHelloAnchor}>
          <img ref={sayHelloPinkWave} className="blue-waves" width="200px" src="/pink-waves.svg" alt="wave" />
          <div className="message-plain" ref={sayHelloMessage}>DiveInSantorini is a crew active on social media. Check our instagram or just greet us :</div>
          <button className="social-media-button">HELLO</button>
        </div>
      </Waypoint>
    </div>
  );
};

export default SayHello;
