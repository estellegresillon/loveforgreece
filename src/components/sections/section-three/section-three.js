import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

const SectionThree = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const sectionThreeLeftAnchor = useRef(null);
  const sectionThreeRightAnchor = useRef(null);

  return (
    <div id="section-three">
      <Waypoint
        onEnter={() => handleWaypointEnter(sectionThreeLeftAnchor.current)}
        onLeave={() => handleWaypointLeave(sectionThreeLeftAnchor.current)}
      >
        <div className="section-three-left left-section" ref={sectionThreeLeftAnchor}>
          <div className="wrapper-img" />
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => handleWaypointEnter(sectionThreeRightAnchor.current)}
        onLeave={() => handleWaypointLeave(sectionThreeRightAnchor.current)}
      >
        <div className="section-three-right right-section" ref={sectionThreeRightAnchor}>
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
  );
};

export default SectionThree;
