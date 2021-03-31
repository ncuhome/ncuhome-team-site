import React, { useState } from "react";
import "./style.scss";

const headerItems = ["首页", "产品", "博客", "团队"];

const HomeHeader: React.FC = () => {
  const [barOffsetX, setBarOffsetX] = useState<number>(0);

  const changeBarOffset = (index: number): void => {
    if (index !== 0) {
      setBarOffsetX(index * 107);
    } else {
      setBarOffsetX(0);
    }
  };

  return (
    <div className="home-header">
      <ul>
        {headerItems.map((item, index) => {
          return (
            <li
              key={item}
              style={{ fontSize: 20 }}
              onMouseOver={() => {
                changeBarOffset(index);
              }}
              onMouseLeave={() => {
                changeBarOffset(0);
              }}
            >
              {item}
            </li>
          );
        })}
        <li style={{ fontSize: 20 }}>加入我们</li>
      </ul>
      <div
        className="home-header-bar"
        style={{ transform: `translateX(${barOffsetX}px)` }}
      ></div>
    </div>
  );
};

export default HomeHeader;
