import React from 'react';

import "./app.scss";

const App = () => {
  const setCursor = e => {
    const windowHeight = window.innerHeight;
    const cursor = document.getElementById("cursor");
    const arrow = document.querySelector(".fa-long-arrow-alt-down");
    const top = document.querySelector(".app-layout").scrollTop;
    const x = e.clientX;
    const y = e.clientY;

    if (typeof x !== 'undefined') {
      cursor.style.opacity = 1;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      if (top === 0) {
        // only show arrow on the bottom of the hero screen
        // disable it above and under
        if (windowHeight / y < 3) {
          arrow.style.opacity = 1;
          arrow.style.left = x + "px";
          arrow.style.top = y + "px";
        } else arrow.style.opacity = 0;
      } else {
        arrow.style.opacity = 0;
      }
    }
  };

  const setMenuColor = e => {
    const windowHeight = window.innerHeight;
    const menu = document.querySelector(".header");
    const cursor = document.getElementById("cursor");
    const arrow = document.querySelector(".fa-long-arrow-alt-down");

    if (e.target.scrollTop > 0) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }

    if (e.target.scrollTop > ((windowHeight / 2) - 200)) {
      cursor.style.height = "10px";
      cursor.style.width = "10px";
      cursor.style.mixBlendMode = "screen";
      // disable arrow if scroll but no mouse move
      arrow.style.opacity = 0;
    } else {
      cursor.style.height = "50px";
      cursor.style.width = "50px";
      cursor.style.mixBlendMode = "normal";
      arrow.style.opacity = 1;
    }
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", setCursor, false);
    return () => window.removeEventListener("mousemove", setCursor, false);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", setMenuColor, true);
    return () => document.removeEventListener("scroll", setMenuColor, true);
  }, []);

  return (
    <>
      <div id="cursor" />
      <i className="fas fa-long-arrow-alt-down" />
      <div className="app-layout">
        <div className="header">
          <div className="logo">LoveForGreece</div>
        </div>
        <div className="hero-scene">
          <h1>LoveForGreece</h1>
        </div>
        <div className="blue-block" />
        <div className="red-block" />
        <div className="yellow-block" />
        <img src="/home.jpg" alt="santorini-home" className="image-block" />

        <section>
          hi
        </section>

      </div>
    </>
  );
}

export default App;
