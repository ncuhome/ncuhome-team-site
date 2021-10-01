import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import upHandle from "@/assets/img/up-handle.png";
import downHandle from "@/assets/img/down-handle.png";
import logo from "@/assets/img/new-logo.png";
import "./style.scss";

const routes = [
  { name: "首页", url: "/" },
  { name: "产品", url: "/products" },
  { name: "团队博客", url: "https://ncuhome.yuque.com/books/share/3039ec5a-9809-4776-be71-b8f7cbea51c1" },
  { name: "关于我们", url: "/about" },
];

const about = { name: "加入我们", url: "/join-us" };

const Header: React.FC = () => {
  const history = useHistory();
  // 控制 menu 的下拉与上拉显示
  const [showControl, setShowControl] = useState(false);
  // 控制上下箭头的改变
  const [underlineShow, setUnderlineShow] = useState(true);
  // 控制在点击"加入我们"时隐藏下划线
  const [index, setIndex] = useState<number>(routes.findIndex((i) => i.url === history.location.pathname));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>();
  const tabContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", onResize);
    const listener = history.listen((item) => {
      const value = routes.findIndex((i) => i.url === item.pathname);
      setIndex(value);
    });

    return () => {
      listener();
      window.removeEventListener("resize", onResize);
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
  };

  // 调整tab下面的线的位置和宽度
  useEffect(() => {
    if (!isMobile) {
      if (tabContainerRef.current?.children[index]) {
        setUnderlineShow(true);
        const { offsetLeft: left, offsetWidth: width } = tabContainerRef.current.children[index] as HTMLUListElement;
        setLineStyle({
          width,
          left,
        });
      }
    }
  }, [index, tabContainerRef]);


  const renderList = () => {
    if (showControl || !isMobile) {
      return (
        <div className="header-home-list" >
          <div style={{ flex: 1 }}></div>
          <ul ref={tabContainerRef}>
            {
              routes.map((item, i) => {
                return (
                  <li
                    className={i === index ? "home-tab-active" : undefined}
                    key={item.name}
                    onClick={() =>
                      item.url.includes("http") ?
                        window.open(item.url) :
                        history.push(item.url)
                    }
                  >
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
          {underlineShow ?
            <div className="home-tab-underline" style={lineStyle} /> :
            null
          }
          <div
            className={'header-join-us'}
            onClick={() => {
              setUnderlineShow(false)
              history.push(about.url)
            }}
          >
            <Link to={about.url}>{about.name}</Link>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="header-home">
      <ul>
        {!isMobile && <img className="header-logo" src={logo} />}
        <div className="header-home-fixed">{renderFirstElement()}</div>
        {renderList()}
      </ul>
    </div>
  );
};

export default Header;
