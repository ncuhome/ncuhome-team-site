import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import './style.scss';

const HorizontalScroll: React.FC = ({ children }) => {
  const { y } = useWindowScroll();
  const [computedOffset, setComputedOffset] = useState(0);

  useEffect(() => {
    const width = 4950
    if (y <= width) {
      setComputedOffset(y);
    }
    if (y > width) {
    }
  }, [y]);

  return (
    <div className="hs-body">
      <div className="hs-content-limit" style={{ position: "fixed" }}>
        <div
          className="hs-horizontal-content"
          style={{ transform: `translateX(-${computedOffset}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
