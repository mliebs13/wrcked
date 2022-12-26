import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    height: 960,
    width: 960,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowDimensions;
