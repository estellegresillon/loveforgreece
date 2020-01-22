import React from "react";

import "./hero-scene.scss";

const HeroScene = () => (
  <>
    <div id="hero-scene">
      <div className="cursor"></div>
      
      <div className="hero-scene-text">
        <div className="message-pink">WELCOME TO SANTORINI</div>
        <div className="title">The Cyclades & the Egee sea</div>
      </div>
      <div className="button-go">
        GO
        <i className="fas fa-arrow-right" />
      </div>
      <div className="hero-image" />
      <div className="background">
        <div className="blue" />
      </div>
      <div className="background-water" />
    </div>
  </>
);

export default HeroScene;