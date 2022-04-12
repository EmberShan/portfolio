// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    // window.scroll(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', 
    });
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;
