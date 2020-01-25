import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./seasons-mobile.scss";
import { MONTHS_BAR } from "./constant";

const SeasonsMobile = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const seasonsAnchor = useRef(null);

  return (
    <div id="seasons-mobile">
      <Waypoint
        onEnter={() => handleWaypointEnter(seasonsAnchor.current)}
        onLeave={() => handleWaypointLeave(seasonsAnchor.current)}
      >
        <div className="seasons-anchor" ref={seasonsAnchor}>
          {/* <img className="white-waves" width="200px" src="/white-waves.svg" alt="wave" />
          <img className="white-waves-small" width="100px" src="/white-waves.svg" alt="wave" /> */}

          <div className="seasons-title message-plain">
            The best time to visit Santorini
          </div>
          <div className="graphic-wrapper">
            {MONTHS_BAR.map(section => {
              return (
                <div key={section.month} className="month-wrapper">
                  <div className={`month-bar ${section.season}-bar`} />
                  <div className="tooltip">
                    <div className="tooltip-season">{section.season} season</div>
                    <div className="tooltip-description">{section.descr}</div>
                  </div>
                  <div className={`month-value ${section.month}-value`}>
                    <div className="bar-legend-month">{section.month}</div>
                    <div className="bar-legend-percent">{section.percent}% crowded</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="seasons-hint">
            - Move your mouse accross each section for more informations -
          </div>
        </div>
      </Waypoint>
    </div>
  );
};

export default SeasonsMobile;