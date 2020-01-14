import React, { useRef, useEffect } from 'react';

import "./cursors.scss";

import Overlays from "./overlays/overlays";
import Dots from "./dots/dots";
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

  const toggleCursor = (cursor, number) => {
    cursor.style.opacity = number;
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
    const heroScene = document.getElementById("hero-scene");
    const cursor = document.querySelector(".cursor");

    heroScene.addEventListener("mousemove", (e) => { onCursorMove(e, cursor, 300) }, false);
    return () => heroScene.removeEventListener("mousemove", (e) => { onCursorMove(e, cursor, 300) }, false);
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
    return () => heroScene.addEventListener("pointerleave", () => { toggleCursor(cursor, 0) });
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
      <Dots />
      <Header />
      <HeroScene />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
