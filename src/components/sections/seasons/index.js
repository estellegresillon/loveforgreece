import React from "react";

import { useWindowSize } from "../../../hooks/useWindowSize";

import Seasons from "./seasons";
import SeasonsMobile from "./seasons-mobile";

const SeasonsView = props => {
  const windowSize = useWindowSize();

  return windowSize.width > 728 ? (
    <Seasons {...props} />
  ) : <SeasonsMobile {...props} />;
};

export default SeasonsView;
