import React, { useState, useEffect } from 'react';

import "./app.scss";

import Overlays from "./overlays/overlays";
import Dots from "./dots/dots";
import Header from "./header/header";
import Sections from "./sections/sections";

import { onScrollDirection, usePrevious } from "./scroll-helper";
import { onCursorMove, toggleCursor } from "./cursor-helper";

const App = () => {
  //////////// SCROLL
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count)
  
  useEffect(() => {
    const sectionOne = document.getElementById("section-one");
    const sectionTwo = document.getElementById("section-two");
    if (count < prevCount) {
      onScrollDirection(sectionOne, sectionTwo, "up");
    } else if (count > prevCount) {
      onScrollDirection(sectionOne, sectionTwo, "down");
    }
  }, [count, prevCount]);

  useEffect(() => {
    document.addEventListener("scroll", () => { setCount(window.pageYOffset) }, true);
    return () => document.removeEventListener("scroll", () => { setCount(window.pageYOffset) }, true);
  }, []);

  //////////// CURSORS
  useEffect(() => {
    const app = document.querySelector(".app");
    const smallCursor = document.querySelector(".cursor-small");

    app.addEventListener("mousemove", (e) => { onCursorMove(e, app, smallCursor, 5) }, false);
    return () => app.removeEventListener("mousemove", (e) => { onCursorMove(e, app, smallCursor, 5) }, false);
  }, []);

  useEffect(() => {
    const heroScene = document.getElementById("hero-scene");
    const cursor = document.querySelector(".cursor");

    heroScene.addEventListener("mousemove", (e) => { onCursorMove(e, heroScene, cursor, 230) }, false);
    return () => heroScene.removeEventListener("mousemove", (e) => { onCursorMove(e, heroScene, cursor, 230) }, false);
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

  return (
    <div className="app">
      <Overlays />
      <Dots />
      <div className="cursor-small"></div>
      <Header />
      <div id="hero-scene">
        <div className="cursor"></div>
        <div className="message">Visit our islands</div>
        <div className="message-stroke">- The Cyclades & the Egee sea -</div>
        <i className="far fa-arrow-alt-circle-down" />
      </div>
      <Sections />
      <div id="footer">
        <div className="message-stroke">Hello</div>
      </div>
    </div>
  );
}

export default App;
