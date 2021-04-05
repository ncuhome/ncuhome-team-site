import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const headerItems = [
  {
    name: "首页",
    link: " ",
  },
  {
    name: "产品",
    link: "product",
  },
  {
    name: "博客",
    link: "blog",
  },
  {
    name: "团队",
    link: "team",
  },
];

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
              key={item.name}
              style={{ fontSize: 20 }}
              onMouseOver={() => {
                changeBarOffset(index);
              }}
              onMouseLeave={() => {
                changeBarOffset(0);
              }}
            >
              <Link to={"/" + item.link}>{item.name}</Link>
            </li>
          );
        })}
        <li style={{ fontSize: 20 }}><Link to="/about">加入我们</Link></li>
      </ul>
      <div
        className="home-header-bar"
        style={{ transform: `translateX(${barOffsetX}px)` }}
      ></div>
    </div>
  );
};

export default HomeHeader;
