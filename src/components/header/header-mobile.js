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
              <div onClick={() => goToSection("section-two")} className="nav-item">
                WHAT TO DO
              </div>
              <div onClick={() => goToSection("section-three")} className="nav-item">
                GET THE GUIDE
              </div>
              <div onClick={() => goToSection("section-four")} className="nav-item">
                SAY HELLO
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default HeaderMobile;