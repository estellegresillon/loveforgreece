import React, { useEffect, useRef } from "react";

import "./section-four.scss";
import { MONTHS_BAR } from "./constant";

const SectionFour = () => {
  const sectionFour = useRef(null);
  const whiteWaves = useRef(null);
  const whiteWavesSmall = useRef(null);
  const graphicWrapper = useRef(null);
  const sectionTitle = useRef(null);

  const moveSectionElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    whiteWaves.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    whiteWavesSmall.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    sectionTitle.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
    graphicWrapper.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = sectionFour.current;
    section.addEventListener("mousemove", moveSectionElements, false);
    return () => section.removeEventListener("mousemove", moveSectionElements, false);
  }, []);

  return (
    <div id="section-four" ref={sectionFour}>
      <img className="white-waves" ref={whiteWaves} width="200px" src="/white-waves.svg" alt="wave" />
      <img className="white-waves-small" ref={whiteWavesSmall} width="100px" src="/white-waves.svg" alt="wave" />
      <div ref={sectionTitle} className="section-four-title message-plain">
        The best time to visit Santorini
      </div>
      <div className="graphic-wrapper" ref={graphicWrapper}>
        <div className="year-bar">
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
      </div>
      <div className="section-four-hint">
        - Move your mouse accross each section for more informations -
      </div>
    </div>
  );
};

export default SectionFour;