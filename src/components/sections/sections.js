import React from "react";

import "./sections.scss";
import "./sections-mobile.scss";
import SectionTwo from "./section-two";
import SectionOne from "./section-one";
import SectionThree from "./section-three";
import SectionFour from "./section-four";

const Sections = () => {
  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  return (
    <>
      <SectionOne
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <SectionTwo
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <SectionThree
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <SectionFour
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <div className="parallax" />
    </>
  );
}

export default Sections;
