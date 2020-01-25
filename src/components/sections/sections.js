import React from "react";

import "./sections.scss";
import "./sections-mobile.scss";

import Intro from "./intro";
import WhatToDo from "./what-to-do";
import Guide from "./guide";
import Seasons from "./seasons";
import SayHello from "./say-hello";
import Pictures from "./pictures";

const Sections = () => {
  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  return (
    <>
      <Intro
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <WhatToDo
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <Guide
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <Seasons
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <SayHello
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <div className="parallax" />
      <Pictures
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
    </>
  );
}

export default Sections;
