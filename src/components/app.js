import React, { useState, useEffect } from 'react';

import "./cursors.scss";

import Overlays from "./overlays/overlays";
import Dots from "./dots/dots";
import Header from "./header/header";
import HeroScene from "./hero-scene/hero-scene";
import Sections from "./sections/sections";
import Footer from "./footer/footer";

import { onScrollDirection, usePrevious } from "../helpers/scroll";
import { onCursorMove, toggleCursor } from "../helpers/cursor";

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

    heroScene.addEventListener("mousemove", (e) => { onCursorMove(e, heroScene, cursor, 280) }, false);
    return () => heroScene.removeEventListener("mousemove", (e) => { onCursorMove(e, heroScene, cursor, 280) }, false);
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
