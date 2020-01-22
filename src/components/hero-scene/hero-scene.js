import React from "react";

import "./hero-scene.scss";

const HeroScene = () => (
  <>
    <div id="hero-scene">
      <div className="cursor"></div>
      <div className="message-pink">WELCOME TO SANTORINI</div>
      <div className="title">The Cyclades & the Egee sea</div>
      <div className="subtitle">
        Visit our islands
        <i className="fas fa-arrow-right" />
      </div>
      <div className="background-water-mask" />
      <div className="background-water" />
    </div>
    <svg>
      <filter id="turbulence" x="0" y="0" width="100%">
        <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0" />
        <feDisplacementMap scale="20" in="SourceGraphic" />
        <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s"
          keyTimes="0;0.5;1" values="0.02 0.06; 0.04 0.08; 0.02 0.06" repeatCount="indefinite" />
      </filter>
    </svg>
  </>
);

export default HeroScene;