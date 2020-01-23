import React, { useEffect } from "react";
import { Waypoint } from 'react-waypoint';

import "./sections.scss";
import "./sections-mobile.scss";

const Sections = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  };

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  };

  const moveSectionOneElements = e => {
    const pinkWave = document.querySelector("#section-one .pink-waves");
    const blueWave = document.querySelector("#section-one .blue-waves");
    const messagePlain = document.querySelector("#section-one .message-plain");
    const messageStroke = document.querySelector("#section-one .message-stroke");
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    pinkWave.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    blueWave.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    messagePlain.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
    messageStroke.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000003},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  const moveSectionFourElements = e => {
    const pinkWave = document.querySelector("#section-four .blue-waves");
    const messagePlain = document.querySelector("#section-four .message-plain");
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    pinkWave.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    messagePlain.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000005},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = document.getElementById("section-one");

    section.addEventListener("mousemove", moveSectionOneElements, false);
    return () => section.removeEventListener("mousemove", moveSectionOneElements, false);
  }, []);

  useEffect(() => {
    const section = document.getElementById("section-four");

    section.addEventListener("mousemove", moveSectionFourElements, false);
    return () => section.removeEventListener("mousemove", moveSectionFourElements, false);
  }, []);

  return (
    <>
      <div id="section-one">
        <Waypoint
          onEnter={() => handleWaypointEnter(".section-one-anchor")}
          onLeave={() => handleWaypointLeave(".section-one-anchor")}
        >
          <div className="section-one-anchor">
            <img className="pink-waves" width="200px" src="/pink-waves.svg" alt="wave" />
            <img className="blue-waves" width="200px" src="/blue-waves.svg" alt="wave" />
            <div className="message-plain">Discover the deep waters, the breathtaking cliffs, the shiny black sands and the romantic pink skies.</div>
            <div className="message-stroke">Santorini is a miracle of nature</div>
          </div>
        </Waypoint>
      </div>

      <div id="section-two">
        <div className="image-locations">
          <div className="locations location-left">
            <div className="location-text">Fira</div>
            <i className="fas fa-ellipsis-h" />
            <ul className="location-description">
              <li>Climb the Caldeira</li>
              <li>Catch the cable car</li>
              <li>Eat gyros</li>
              <li>Three bells of Fira</li>
            </ul>
          </div>

          <div className="locations location-center">
            <div className="location-text">Oia</div>
            <i className="fas fa-ellipsis-h" />
            <ul className="location-description">
              <li>Byzantine castle ruins</li>
              <li>Ammoudi</li>
              <li>Oia Castle</li>
              <li>Maritime museum</li>
            </ul>
          </div>

          <div className="locations location-right">
            <div className="location-text">Thera</div>
            <i className="fas fa-ellipsis-h" />
            <ul className="location-description">
              <li>Archeological museum</li>
              <li>Walk through Thera</li>
              <li>Akrotiri ruins</li>
              <li>Watch the sunset</li>
            </ul>
          </div>
        </div>
        <Waypoint
          onEnter={() => handleWaypointEnter(".section-two-anchor")}
          onLeave={() => handleWaypointLeave(".section-two-anchor")}
        >
          <div className="section-two-anchor message-stroke">what to see, what to do</div>
        </Waypoint>
      </div>

      <div id="section-three">
        <Waypoint
          onEnter={() => handleWaypointEnter(".section-three-left")}
          onLeave={() => handleWaypointLeave(".section-three-left")}
        >
          <div className="section-three-left left-section">
            <div className="wrapper-img" />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => handleWaypointEnter(".section-three-right")}
          onLeave={() => handleWaypointLeave(".section-three-right")}
        >
          <div className="section-three-right right-section">
            <div className="message-stroke">Get your guide :</div>
            <div className="message-plain">Receive a free guide for your tour in the cyclades directly in your email box</div>
            <div className="guide-form">
              <label>Name</label>
              <input type="text"></input>
              <label>e-mail</label>
              <input type="text"></input>
              <button type="submit">GET THE GUIDE</button>
            </div>
          </div>
        </Waypoint>
      </div>

      <div id="section-four">
        <Waypoint
          onEnter={() => handleWaypointEnter(".section-four-anchor")}
          onLeave={() => handleWaypointLeave(".section-four-anchor")}
        >
          <div className="section-four-anchor">
            <img className="blue-waves" width="200px" src="/pink-waves.svg" alt="wave" />
            <div className="message-plain">DiveInSantorini is a crew active on social media. Check our instagram or just greet us :</div>
            <button className="social-media-button">HELLO</button>
          </div>
        </Waypoint>
      </div>

      <div className="parallax" />
    </>
  );
}

export default Sections;
