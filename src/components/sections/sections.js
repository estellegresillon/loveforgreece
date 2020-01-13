import React, { useState, useEffect } from "react";

import "./sections.scss";
import "./sections-mobile.scss";

const Sections = () => {
  const [isSectionOneVisible, setSectionOneVisible] = useState(false);
  const [isSectionTwoVisible, setSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setSectionThreeVisible] = useState(false);

  const triggerImage = () => {
    const windowHeight = window.innerHeight;
    const view = window.pageYOffset;

    if (view > windowHeight) {
      setSectionOneVisible(true);
    } else if (view + 200 < windowHeight) {
      setSectionOneVisible(false);
    }

    if (view + 200 > (windowHeight * 2)) {
      setSectionTwoVisible(true);
    } else if (view + 200 < (windowHeight * 2)) {
      setSectionTwoVisible(false);
    }

    if (view + 400 > (windowHeight * 3)) {
      setSectionThreeVisible(true);
    } else if (view + 400 < (windowHeight * 3)) {
      setSectionThreeVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", triggerImage, false);
    return () => window.removeEventListener("scroll", triggerImage, false);
  }, [])

  return (
    <>
      <div id="section-one">
        <div className="image-locations">
          <div className="locations location-left">
            <div className="location-text">Fira</div>
            <ul className="location-description">
              <li>Climb the Caldeira</li>
              <li>Catch the cable car</li>
              <li>Eat gyros</li>
              <li>Three bells of Fira</li>
            </ul>
          </div>

          <div className="locations location-center">
            <div className="location-text">Oia</div>
            <ul className="location-description">
              <li>Byzantine castle ruins</li>
              <li>Ammoudi</li>
              <li>Oia Castle</li>
              <li>Maritime museum</li>
            </ul>
          </div>

          <div className="locations location-right">
            <div className="location-text">Thera</div>
            <ul className="location-description">
              <li>Archeological museum</li>
              <li>Walk through Thera</li>
              <li>Akrotiri ruins</li>
              <li>Watch the sunset</li>
            </ul>
          </div>
        </div>
        {isSectionOneVisible && <div className="message-stroke">what to see, what to do</div>}
      </div>

      <div id="section-two">
        {isSectionTwoVisible &&
          <>
            <img className="pink-waves" width="200px" src="/pink-waves.svg" alt="wave" />
            <img className="blue-waves" width="200px" src="/blue-waves.svg" alt="wave" />
            <div className="message-plain">Discover the deep waters, the breathtaking cliffs, the shiny black sands and the romantic pink skies.</div>
            <div className="message-stroke">Santorini is a miracle of nature</div>
          </>}
      </div>

      <div id="section-three">
        {isSectionThreeVisible &&
          <>
            <div className="left-section">
              <img src="/home2-min.jpg" alt="guide-overview" />
            </div>
            <div className="right-section">
              <div className="message-stroke">Get your guide :</div>
              <div className="message-plain">Receive a free guide for your tour in the cyclades directly in your email box</div>
              <div className="guide-form">
                <label>Name</label>
                <input type="text"></input>
                <label>e-mail</label>
                <input type="text"></input>
                <button type="submit">GET THE GUIDE</button>
              </div>
            </div>
          </>}
      </div>
    </>
  );
}

export default Sections;