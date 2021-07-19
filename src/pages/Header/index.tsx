import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import upHandle from "@/assets/img/up-handle.png"
import downHandle from "@/assets/img/down-handle.png";
import "./style.scss";

const HomeHeader: React.FC = () => {
  const history = useHistory();
  let windowWidth = window.outerWidth;
  let controlHandle: string; //控制menu的下拉与上拉显示
  const [showControl, setShowControl] = useState(false);

  if (showControl) {
    controlHandle = upHandle
  } else {
    controlHandle = downHandle
  }

  return (
    <div
      className="header-home"
    >
      <ul>
        <div className="header-home-fixed">
          <p onClick={() => history.push('./')}>
            {windowWidth < 768 ?
              "NCUHOME" :
              "首页"}
          </p>
          {windowWidth < 768 ?
            <img
              onClick={() => setShowControl(!showControl)}
              src={controlHandle}
            />
            :
            null
          }
        </div>
        {windowWidth < 768 ?
          (showControl ?
            (
              <div className="header-home-list">
                <li onClick={() => history.push('./product')}>产品</li>
                <li
                  onClick={() => window.location.replace('https://ncuhome.yuque.com/ncuhome')}
                >博客</li>
                <li onClick={() => history.push('./team')}>团队</li>
                <li><Link to="/about">加入我们</Link></li>
              </div>
            )
            :
            null
          )
          :
          (
            <div className="header-home-list">
              <li onClick={() => history.push('./product')}>产品</li>
              <li
                onClick={() => window.location.replace('https://ncuhome.yuque.com/ncuhome')}
              >博客</li>
              <li onClick={() => history.push('./team')}>团队</li>
              <li><Link to="/about">加入我们</Link></li>
            </div>
          )
        }
      </ul>
    </div >
  );
};

export default HomeHeader;
