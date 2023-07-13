import React, { useEffect, useState } from "react";
import "./ScrollToTop.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function ScrollToTop() {
  const [scroll, setSecroll] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setSecroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scroll > 200 && (
        <div className="scrollToTop" onClick={top}>
          <div className="top">
            <ArrowUpwardIcon />
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
