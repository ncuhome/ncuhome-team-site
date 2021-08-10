import React, { useRef } from "react";
import './style.scss';

const HorizontalScroll: React.FC = ({ children }) => {
  const hsContent = useRef<HTMLDivElement>();

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const { deltaY } = e;
    hsContent.current.scrollLeft += Math.floor(deltaY) * 1.2
  }

  return (
    <div className="hs-body">
      <div className="hs-content-limit" style={{ position: "fixed" }}>
        <div
          className="hs-horizontal-content"
          ref={hsContent}
          onWheel={handleWheel}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
