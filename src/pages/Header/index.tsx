import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import upHandle from "@/assets/img/up-handle.png";
import downHandle from "@/assets/img/down-handle.png";
import "./style.scss";

const routes = [
  { name: "首页", url: "/" },
  { name: "产品", url: "/product" },
  { name: "博客", url: "https://ncuhome.yuque.com/ncuhome" },
  { name: "团队", url: "/team" },
];

const about = { name: "加入我们", url: "/about" };

const Header: React.FC = () => {
  // 控制 menu 的下拉与上拉显示
  const [showControl, setShowControl] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.outerWidth < 768);
  const history = useHistory();

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.outerWidth < 768);
    }
    window.addEventListener("resize", onResize)
    const listener = history.listen((item) => {
      const value = routes.findIndex((i) => i.url === item.pathname);
      setIndex(value);
    });

    return () => {
      listener();
      window.removeEventListener("resize", onResize)
    };
  }, []);

  const renderFirstElement = () => {
    if (isMobile) {
      return (
        <>
          <p>NCUHOME</p>
          <img
            onClick={() => setShowControl(!showControl)}
            src={showControl ? upHandle : downHandle}
          />
        </>
      );
    }

    return <p onClick={() => history.push("/")}>{routes[0].name}</p>;
  };

  const renderList = () => {
    if (showControl || !isMobile) {
      return (
        <div className="header-home-list">
          {routes.slice(1).map((item) => (
            <li
              key={item.name}
              onClick={() =>
                item.url.includes("http")
                  ? window.open(item.url)
                  : history.push(item.url)
              }
            >
              {item.name}
            </li>
          ))}
          <li>
            <Link to={about.url}>{about.name}</Link>
          </li>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="header-home">
      <ul>
        <div className="header-home-fixed">{renderFirstElement()}</div>
        {renderList()}
      </ul>
    </div>
  );
};

export default Header;
