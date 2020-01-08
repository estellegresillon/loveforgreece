import React, { useEffect } from 'react';

import "./app.scss";

const App = () => {
  const setCursorMove = e => {
    const container = document.getElementById("container");
    const circle = document.querySelector(".circle");
    var relX = e.pageX - container.offsetLeft - 230;
    var relY = e.pageY - container.offsetTop - 230;
    circle.style.left = relX + "px";
    circle.style.top = relY + "px";
  };

  const setCursor = e => {
    const container = document.querySelector(".app");
    const circleSmall = document.querySelector(".circle-small");
    var relX = e.pageX - container.offsetLeft - 5;
    var relY = e.pageY - container.offsetTop - 5;
    circleSmall.style.left = relX + "px";
    circleSmall.style.top = relY + "px";
  };

  const toggleCursor = (circle, number) => {
    circle.style.opacity = number;
  }

  useEffect(() => {
    const container = document.querySelector(".app");
    container.addEventListener("mousemove", setCursor, false);
    return () => container.removeEventListener("mousemove", setCursor, false);
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");
    container.addEventListener("mousemove", setCursorMove, false);
    return () => container.removeEventListener("mousemove", setCursorMove, false);
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");
    const circle = document.querySelector(".circle");
    container.addEventListener("pointerenter", () => { toggleCursor(circle, 1) });
    return () => container.addEventListener("pointerenter", () => { toggleCursor(circle, 1) });
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");
    const circle = document.querySelector(".circle");
    container.addEventListener("pointerleave", () => { toggleCursor(circle, 0) });
    container.addEventListener("pointerleave", () => { toggleCursor(circle, 0) });
  }, []);

  return (
    <div className="app">
      <div className="blue-block" />
      <div className="red-block" />
      <div className="yellow-block" />

      <div className="circle-small"></div>
      <div className="header"></div>

      <div id="container">
        <div className="circle"></div>
        <div className="message">Visit Santorini</div>
        <div className="message-stroke">- The Cyclades & the Egee sea -</div>
      </div>

      <div id="picture">
        <div className="message-stroke">Hello</div>
      </div>

      <div id="container">
        <div className="message-stroke">Hello</div>
      </div>
    </div>
  );
}

export default App;
