import React, { useRef, useEffect } from 'react';

import "./cursors.scss";

import Overlays from "./overlays";
import Header from "./header";
import HeroScene from "./hero-scene";
import Sections from "./sections";
import Footer from "./footer";


const Home = () => {
  const mouseContainer = useRef(null);
  const mouseRef = useRef(null);

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
    const smallCursor = mouseContainer.current;

    window.addEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
    return () => window.removeEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
  }, []);

  useEffect(() => {
    const smallCursor = mouseContainer.current;

    window.addEventListener("scroll", () => { onScroll(smallCursor) });
    return () => window.removeEventListener("scroll", () => { onScroll(smallCursor) });
  }, []);

  return (
    <div className="app">
      <div className="cursor-small" ref={mouseContainer}></div>
      <Overlays />
      <Header />
      <HeroScene />
      <Sections />
      <Footer />
    </div>
  );
}

export default Home;
