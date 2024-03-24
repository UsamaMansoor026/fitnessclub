import React from "react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const Foot = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileFooter, setMobileFooter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);
    if (windowWidth < 768) {
      setMobileFooter(true);
    } else {
      setMobileFooter(false);
    }
  }, [windowWidth]);
  return (
    <div className="relative">
      {mobileFooter ? (
        <div className="fixed w-full bottom-0">
          <MobileFooter />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Foot;
