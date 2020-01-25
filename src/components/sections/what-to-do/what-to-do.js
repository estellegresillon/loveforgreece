import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./what-to-do.scss";

const WhatToDo = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const whatToDoAnchor = useRef(null);

  return (
    <div id="what-to-do" >
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
        onEnter={() => handleWaypointEnter(whatToDoAnchor.current)}
        onLeave={() => handleWaypointLeave(whatToDoAnchor.current)}
      >
        <div className="what-to-do-anchor message-stroke" ref={whatToDoAnchor}>what to see, what to do</div>
      </Waypoint>
    </div>
  );
};

export default WhatToDo;
