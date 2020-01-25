import React from "react";

import "./header.scss";

const Header = () => {
  const goToSection = (div) => {
    const section = document.getElementById(div);
    section.scrollIntoView();
  }

  return (
    <div className="header">
      <div className="logo">
        <span>
          <i className="fas fa-sun" />
          <span style={{ fontWeight: 900 }}>DIVE</span>
          <span>IN</span>
        </span>
        SANTORINI
      </div>
      <div className="navigation">
        <div onClick={() => goToSection("section-two")} className="nav-item">
          WHAT TO DO
        </div>
        <div onClick={() => goToSection("section-three")} className="nav-item">
          GET THE GUIDE
        </div>
        <div onClick={() => goToSection("section-four")} className="nav-item">
          SEASONS
        </div>
        <div onClick={() => goToSection("section-five")} className="nav-item">
          SAY HELLO
        </div>
      </div>
    </div >
  );
};

export default Header;