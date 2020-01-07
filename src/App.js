import React from 'react';

import "./app.scss";

const App = () => {
  const setCursor = e => {
    const windowHeight = window.innerHeight;
    const cursor = document.getElementById("cursor");
    const arrow = document.querySelector(".fa-long-arrow-alt-down");
    const x = e.clientX;
    const y = e.clientY;

    if (typeof x !== 'undefined') {
      cursor.style.opacity = 1;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      if (windowHeight / y < 2.5) {
        arrow.style.opacity = 1;
        arrow.style.left = x + "px";
        arrow.style.top = y + "px";
      } else arrow.style.opacity = 0;
    }
  };

  const setMenuColor = e => {
    const windowHeight = window.innerHeight;
    const menu = document.querySelector(".header");
    const cursor = document.getElementById("cursor");

    if (e.target.scrollTop > 0) {
      menu.classList.add("sticky");
    } else menu.classList.remove("sticky");

    if (e.target.scrollTop > (windowHeight / 2)) {
      cursor.style.height = "10px";
      cursor.style.width = "10px";
      cursor.style.mixBlendMode = "screen";
    } else {
      cursor.style.height = "50px";
      cursor.style.width = "50px";
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
      <div className="app-layout">
        <div className="header">
          <div className="logo">Logo</div>
        </div>
        <div className="hero-scene">
          <h1>Hero scene message</h1>
        </div>
        <div className="blue-block" />
        <div className="red-block" />
        <div className="yellow-block" />
        <img src="/home.jpg" alt="santorini-home" className="image-block" />
        <i className="fas fa-long-arrow-alt-down" />

        <section>
          hi
        </section>

      </div>
    </>
  );
}

export default App;
