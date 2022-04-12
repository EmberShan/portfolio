import React, { useContext, useEffect, useState } from "react";
import "./DotRing.scss";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";
import classNames from 'classnames';

const DotRing = () => {
    // 1.
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  const addEventListeners = () => {
       document.addEventListener("mouseenter", onMouseEnter);
       document.addEventListener("mouseleave", onMouseLeave);

       document.addEventListener("mousedown", onMouseDown);
       document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseLeave = () => {
      setHidden(true);
   };
  const onMouseEnter = () => {
      setHidden(false);
  };

  const onMouseDown = () => {
      setClicked(true);
  };
  const onMouseUp = () => {
      setClicked(false);
  };

  const cursorClasses = classNames(
      'cursor',
      {
        'cursor--hidden': hidden, 
        'cursor--clicked': clicked,
      }
  ); 


  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);



  const { x, y } = useMousePosition();
  return (
    <div className={cursorClasses}>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
};

export default DotRing;