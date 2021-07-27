import React, { createRef } from "react";
import './style.scss';

let resizeTimeout: NodeJS.Timeout | null;

const throttle = (
  e: React.WheelEvent<HTMLDivElement>,
  fb: React.WheelEventHandler<HTMLDivElement>
) => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      fb(e);
    }, 20);
  }
};

const HorizontalScroll: React.FC = ({ children }) => {
  const hsContent = createRef<HTMLDivElement>();

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    console.log("wheel");
    const { deltaY } = e;
    const { scrollWidth, offsetWidth, scrollLeft } = hsContent.current;
    const maxScroll = scrollWidth - offsetWidth;

    //TODO: 修改滚动方案，让让滚动更丝滑
    if (deltaY > 0) {
      /* 向下滚动 */
      if (scrollLeft < maxScroll) {
        hsContent.current.scrollLeft += 100;
      }
    } else {
      /* 向上滚动 */
      if (scrollLeft > 0) {
        hsContent.current.scrollLeft -= 100;
      }
    }
  }

  return (
    <div className="hs-body">
      <div className="hs-content-limit" style={{ position: "fixed" }}>
        <div
          className="hs-horizontal-content"
          ref={hsContent}
          onWheel={e => throttle(e, handleWheel)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
