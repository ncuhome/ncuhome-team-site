import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

const headerItems = [
  {
    name: "首页",
    link: "",
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
  const history = useHistory()

  const changeBarOffset = (index: number): void => {
    if (index !== 0) {
      setBarOffsetX(index * 117 + 35);
    } else {
      setBarOffsetX(35);
    }
  };

  return (
    <div className="header">
      <ul>
        {headerItems.map((item, index) => {
          return (
            <li
              onClick={() => history.push(`./${item.link}`)}
              key={item.name}
              style={{ fontSize: 20 }}
              onMouseOver={() => {
                changeBarOffset(index);
              }}
              onMouseLeave={() => {
                changeBarOffset(0);
              }}
            >
              {item.name}
            </li>
          );
        })}
        <li style={{ fontSize: 20 }}><Link to="/about">加入我们</Link></li>
      </ul>
      <div
        className="header-bar"
        style={{ transform: `translateX(${barOffsetX}px)` }}
      ></div>
    </div>
  );
};

export default HomeHeader;
