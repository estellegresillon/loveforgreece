import React, { useRef, useEffect } from 'react';

import "./cursors.scss";

import Overlays from "./overlays/overlays";
import Header from "./header/header";
import HeroScene from "./hero-scene/hero-scene";
import Sections from "./sections/sections";
import Footer from "./footer/footer";


const App = () => {
  const mouseRef = useRef(null)

  const onCursorMove = (e, cursor, offset) => {
    const relX = e.clientX - offset;
    const relY = e.clientY - offset;
    mouseRef.current = relY;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  const onScroll = cursor => {
    cursor.style.top = mouseRef.current + "px";
  };

  useEffect(() => {
    const app = document.querySelector(".app");
    const smallCursor = document.querySelector(".cursor-small");

    app.addEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
    return () => app.removeEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
  }, []);

  useEffect(() => {
    const smallCursor = document.querySelector(".cursor-small");

    window.addEventListener("scroll", () => { onScroll(smallCursor) });
    return () => window.removeEventListener("scroll", () => { onScroll(smallCursor) });
  }, []);

  return (
    <div className="app">
      <div className="cursor-small"></div>
      <Overlays />
      <Header />
      <HeroScene />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
