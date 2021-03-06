import React from 'react';

import { useComponentVisible } from "../../hooks/useComponentVisible";
import "./header-mobile.scss";

const HeaderMobile = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const goToSection = (div) => {
    const section = document.getElementById(div);
    setIsComponentVisible(false);
    section.scrollIntoView();
  }

  return (
    <div className="header-mobile">
      <div className="logo">
        <span>
          <i className="fas fa-sun" />
          <span style={{ fontWeight: 900 }}>DIVE</span>
          <span>IN</span>
        </span>
        SANTORINI
      </div>
      <div className="header-right">
        <i className="fas fa-hamburger" onClick={() => setIsComponentVisible(true)} />
        {isComponentVisible &&
          <div ref={ref} className="dropdown-menu-mobile">
            <div className="navigation">
              <div onClick={() => goToSection("what-to-do")} className="nav-item">
                WHAT TO DO
              </div>
              <div onClick={() => goToSection("guide")} className="nav-item">
                GET THE GUIDE
              </div>
              <div onClick={() => goToSection("seasons-mobile")} className="nav-item">
                SEASONS
              </div>
              <div onClick={() => goToSection("say-hello")} className="nav-item">
                SAY HELLO
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default HeaderMobile;