import React from "react";

import "./header.scss";

const Header = () => {
  const goToSection = (section) => {
    const sectionOne = document.getElementById("section-one");
    const sectionThree = document.getElementById("section-three");

    if (section === "one") {
      sectionOne.scrollIntoView();
    } else sectionThree.scrollIntoView();
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
        <div onClick={() => goToSection("one")} className="nav-item">
          WHAT TO DO
        </div>
        <div onClick={() => goToSection("three")} className="nav-item">
          GET THE GUIDE
        </div>
      </div>
    </div >
  );
};

export default Header;