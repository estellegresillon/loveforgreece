import React from "react";

import "./dots.scss";

const Dots = () => (
  <>
    <div className="dots-falling-left">
      <div className="dot yellow-dot" />
      <div className="dot dark-blue-dot" />
      <div className="dot pink-dot" />
      <div className="dot light-blue-dot" />
      <div className="dot red-dot" />
      <div className="dot blue-dot" />
    </div>

    <div className="dots-falling-right">
      <div className="dot yellow-dot" />
      <div className="dot dark-blue-dot" />
      <div className="dot pink-dot" />
      <div className="dot light-blue-dot" />
      <div className="dot red-dot" />
      <div className="dot blue-dot" />
    </div>
  </>
);

export default Dots;