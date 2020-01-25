import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./guide.scss";

const Guide = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const guideLeftAnchor = useRef(null);
  const guideRightAnchor = useRef(null);

  return (
    <div id="guide">
      <Waypoint
        onEnter={() => handleWaypointEnter(guideLeftAnchor.current)}
        onLeave={() => handleWaypointLeave(guideLeftAnchor.current)}
      >
        <div className="guide-left left-section" ref={guideLeftAnchor}>
          <div className="wrapper-img" />
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => handleWaypointEnter(guideRightAnchor.current)}
        onLeave={() => handleWaypointLeave(guideRightAnchor.current)}
      >
        <div className="guide-right right-section" ref={guideRightAnchor}>
          <div className="message-stroke">Get your guide for free</div>
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

export default Guide;
