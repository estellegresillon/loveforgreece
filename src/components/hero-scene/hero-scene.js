import React, { useEffect } from "react";

import "./hero-scene.scss";

const HeroScene = () => {
  const scrollToSectionOne = () => {
    document.getElementById("section-one").scrollIntoView();
  }

  const moveSectionElements = e => {
    const wave = document.querySelector("#hero-scene .white-waves");
    const bgImage = document.querySelector("#hero-scene .hero-image");
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    wave.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.04},${distanceFromMiddleY * -0.08},0,1)`;
    bgImage.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = document.getElementById("hero-scene");

    section.addEventListener("mousemove", moveSectionElements, false);
    return () => section.removeEventListener("mousemove", moveSectionElements, false);
  }, []);

  return (
    <>
      <div id="hero-scene">
        <div className="cursor"></div>

        <img className="white-waves" width="200px" src="/white-waves.svg" alt="wave" />
        <div className="hero-scene-text">
          <div className="message-pink">WELCOME TO SANTORINI</div>
          <div className="title">The Cyclades & the Egee sea</div>
        </div>
        <div onClick={() => scrollToSectionOne()} className="button-go">
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
};

export default HeroScene;