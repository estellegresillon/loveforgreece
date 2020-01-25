import React from "react";

import { useWindowSize } from "../../hooks/useWindowSize";

import Header from "./header";
import HeaderMobile from "./header-mobile";

const HeaderView = () => {
  const windowSize = useWindowSize();

  return windowSize.width > 728 ? (
    <Header />
  ) : <HeaderMobile />;
};

export default HeaderView;
