import React from "react";

import "./hero-scene.scss";

const HeroScene = () => (
  <div id="hero-scene">
    <div className="cursor"></div>
    <div className="message-pink">WELCOME TO SANTORINI</div>
    <div className="title">The Cyclades & the Egee sea</div>
    <div className="subtitle">
      Visit our islands
      <i className="fas fa-arrow-right" />
    </div>
  </div>
);

export default HeroScene;