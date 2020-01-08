import React, { useState, useEffect, useRef } from 'react';

import "./styles/app.scss";

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const App = () => {
  //////////// SCROLL
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count)
  
  useEffect(() => {
    const section = document.getElementById("section-one");
    const sectionBis = document.getElementById("section-two");
    if (count > prevCount) {
      section.style.transform = "rotate(-8deg)";
      sectionBis.style.transform = "rotate(-8deg)";
    } else if (count < prevCount) {
      section.style.transform = "rotate(8deg)";
      sectionBis.style.transform = "rotate(8deg)";
    }
  }, [count, prevCount]);

  useEffect(() => {
    document.addEventListener("scroll", () => { setCount(window.pageYOffset) }, true);
    return () => document.removeEventListener("scroll", () => { setCount(window.pageYOffset) }, true);
  }, []);

  //////////// CURSORS
  const setCursorSmall = e => {
    const app = document.querySelector(".app");
    const cursorSmall = document.querySelector(".cursor-small");
    var relX = e.pageX - app.offsetLeft - 5;
    var relY = e.pageY - app.offsetTop - 5;
    cursorSmall.style.left = relX + "px";
    cursorSmall.style.top = relY + "px";
  };

  const setCursor = e => {
    const heroScene = document.getElementById("hero-scene");
    const cursor = document.querySelector(".cursor");
    var relX = e.pageX - heroScene.offsetLeft - 230;
    var relY = e.pageY - heroScene.offsetTop - 230;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  const toggleCursor = (cursor, number) => {
    cursor.style.opacity = number;
  };

  useEffect(() => {
    const app = document.querySelector(".app");
    app.addEventListener("mousemove", setCursorSmall, false);
    return () => app.removeEventListener("mousemove", setCursorSmall, false);
  }, []);

  useEffect(() => {
    const heroScene = document.getElementById("hero-scene");
    heroScene.addEventListener("mousemove", setCursor, false);
    return () => heroScene.removeEventListener("mousemove", setCursor, false);
  }, []);

  useEffect(() => {
    const heroScene = document.getElementById("hero-scene");
    const cursor = document.querySelector(".cursor");
    heroScene.addEventListener("pointerenter", () => { toggleCursor(cursor, 1) });
    return () => heroScene.addEventListener("pointerenter", () => { toggleCursor(cursor, 1) });
  }, []);

  useEffect(() => {
    const heroScene = document.getElementById("hero-scene");
    const cursor = document.querySelector(".cursor");
    heroScene.addEventListener("pointerleave", () => { toggleCursor(cursor, 0) });
    heroScene.addEventListener("pointerleave", () => { toggleCursor(cursor, 0) });
  }, []);

  return (
    <div className="app">
      <div className="mount-animation-light-blue" />
      <div className="mount-animation-blue" />
      <div className="mount-animation-yellow" />

      <div className="cursor-small"></div>
      <div className="header"></div>

      <div id="hero-scene">
        <div className="cursor"></div>
        <div className="message">Visit Santorini</div>
        <div className="message-stroke">- The Cyclades & the Egee sea -</div>
      </div>

      <div id="section-one">
        <div className="message-stroke">Hello</div>
      </div>

      <div id="section-two">
        <div className="message-stroke">Hello</div>
      </div>
    </div>
  );
}

export default App;
