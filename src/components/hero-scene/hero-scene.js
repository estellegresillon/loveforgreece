import React, { useEffect, useRef } from "react";

import "./hero-scene.scss";

const HeroScene = () => {
  const heroScene = useRef(null);
  const whiteWaves = useRef(null);
  const bgImage = useRef(null);

  const scrollToSectionOne = () => {
    document.getElementById("intro").scrollIntoView();
  }

  const moveSectionElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    whiteWaves.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    bgImage.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = heroScene.current;
    section.addEventListener("mousemove", moveSectionElements, false);
    return () => section.removeEventListener("mousemove", moveSectionElements, false);
  }, []);

  return (
    <>
      <div id="hero-scene" ref={heroScene}>
        <div className="cursor"></div>

        <img className="white-waves" ref={whiteWaves} width="200px" src="/white-waves.svg" alt="wave" />
        <div className="hero-scene-text">
          <div className="message-pink">WELCOME TO SANTORINI</div>
          <div className="title">The Cyclades & the Egee sea</div>
        </div>
        <div onClick={() => scrollToSectionOne()} className="button-go">
          GO
          <i className="fas fa-arrow-right" />
        </div>
        <div className="hero-image" ref={bgImage} />
        <div className="background">
          <div className="blue" />
        </div>
        <div className="background-water" />
      </div>
    </>
  );
};

export default HeroScene;