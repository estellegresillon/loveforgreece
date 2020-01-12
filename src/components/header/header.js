import React from "react";

import "./header.scss";

const Header = () => (
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
      <div className="nav-item">
        WHAT TO DO
      </div>
      <div className="nav-item">
        GET THE GUIDE
      </div>
    </div>
  </div>
);

export default Header;