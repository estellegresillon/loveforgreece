import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./pictures.scss";

const Pictures = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const pictures = useRef(null);
  const picturesAnchor = useRef(null);

  return (
    <div id="pictures" ref={pictures}>
      <Waypoint
        onEnter={() => handleWaypointEnter(picturesAnchor.current)}
        onLeave={() => handleWaypointLeave(picturesAnchor.current)}
      >
        <div className="pictures-anchor" ref={picturesAnchor}>
          <div className="section section-left">
            <img className="section-left-top" width="80%" src="/pictures-2-res.jpg" alt="santorini-sea" />
            <img className="pink-waves" width="200px" src="/pink-waves.svg" alt="wave" />
          </div>
          <div className="section section-center">
            <img className="section-center-top" width="70%" src="/pictures-3-res.jpg" alt="santorini-sea" />
            <img className="section-center-bottom" width="50%" src="/pictures-4-res.jpg" alt="santorini-sea" />
            <img className="white-waves" width="100px" src="/white-waves.svg" alt="wave" />
          </div>
          <div className="section section-right">
            <img className="section-right-top" width="40%" src="/pictures-5-res.jpg" alt="santorini-sea" />
            <img className="blue-waves" width="150px" src="/blue-waves.svg" alt="wave" />
            <img className="section-right-bottom" width="30%" src="/pictures-1-res.jpg" alt="santorini-sea" />
          </div>
        </div>
      </Waypoint>
    </div>
  );
};

export default Pictures;
