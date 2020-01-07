import React from 'react';

import "./app.scss";

const App = () => {
  const setCursorMove = e => {
    // const windowHeight = window.innerHeight;
    const cursor = document.getElementById("cursor");
    const arrow = document.querySelector(".fa-long-arrow-alt-down");
    const coloredCursor = document.getElementById("colored-cursor");
    const top = document.querySelector(".app-layout").scrollTop;
    const x = e.clientX + 170;
    const y = e.clientY + 170;
    const xbis = x - 170;
    const ybis = y - 170;

    if (typeof x !== 'undefined') {
      cursor.style.opacity = 1;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      arrow.style.left = x + "px";
      arrow.style.top = y + "px";

      if (top === 0) {
        arrow.style.opacity = 1;
        coloredCursor.style.opacity = 1;
        coloredCursor.style.left = xbis + "px";
        coloredCursor.style.top = ybis + "px";
      } else {
        arrow.style.opacity = 0;
        coloredCursor.style.opacity = 0;
      }
    }
  };

  const setCursorScroll = e => {
    const windowHeight = window.innerHeight;
    const cursor = document.getElementById("cursor");
    const coloredCursor = document.getElementById("colored-cursor");
    const arrow = document.querySelector(".fa-long-arrow-alt-down");
    const top = document.querySelector(".app-layout").scrollTop;

    console.log(top)

    if (e.target.scrollTop > ((windowHeight / 2))) {
      cursor.style.height = "10px";
      cursor.style.width = "10px";
      arrow.style.opacity = 0;
      coloredCursor.style.opacity = 0;
    } else {
      cursor.style.height = "50px";
      cursor.style.width = "50px";
      arrow.style.opacity = 1;
      coloredCursor.style.opacity = 1;
    }


  }

  React.useEffect(() => {
    window.addEventListener("mousemove", setCursorMove, false);
    return () => window.removeEventListener("mousemove", setCursorMove, false);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", setCursorScroll, true);
    return () => document.removeEventListener("scroll", setCursorScroll, true);
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="colored-cursor" />
      <div className="blue-block" />
      <div className="red-block" />
      <div className="yellow-block" />
      <i className="fas fa-long-arrow-alt-down" />
      <div className="app-layout">
        <div className="header">
          <div className="logo">LoveForGreece</div>
        </div>
        <div className="hero-scene">
          <h1>Visit Santorini</h1>
        </div>
        <section className="section-with-bg">
          hi
        </section>
        <section className="section-with-no-bg">
          hi
        </section>
        <img src="/home.jpg" alt="santorini-home" className="image-block" />

      </div>
    </>
  );
}

export default App;
