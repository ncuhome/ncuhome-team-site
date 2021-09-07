import React, { ReactNode } from "react";
import BoldButton from "../../../../home/components/BoldButton"
import CompanyLogo from "@/assets/img/CompanyLogo.png"
import "./style.scss";

const Bubbles: ReactNode = (
  <>
    <div className="bubble1"> </div>
    <div className="bubble2"> </div>
    <div className="bubble3"> </div>
    <div className="bubble4"> </div>
    <div className="bubble5"> </div>
  </>
)

const About: React.FC = () => {
  return (
    <div className="team-footer-wrapper">
      <div className="team-footer-top">
        <p className="team-footer-top-text1">Ncu Homers </p>
        <p className="team-footer-top-text2"> travel</p>
        <p className="team-footer-top-text3"> around the world</p>
        <img className="team-footer-top-img" src={CompanyLogo} alt="company" />
      </div>
      <div className="team-footer-middle">
        <p className="team-footer-middle-text1">Let's make something great</p><br />
        <p className="team-footer-middle-text2">together</p>
        <div className="team-footer-middle-btn">
          <BoldButton text="Jion us" bgColor="#FAFCFF" />
        </div>
        {Bubbles}
      </div>
      <div className="team-footer-bottom">
        <ul className="team-footer-list">
          <li>
            <ul className="team-footer-ul-about">
              <li>
                <p>关注我们</p>
              </li>
              <li>
                <a href="#" className="wechat">
                  微信
                </a>
              </li>
              <li>
                <a
                  className="zhihu"
                  href="https://www.zhihu.com/people/nan-chang-da-xue-jia-yuan-gong-zuo-shi"
                >
                  知乎
                </a>
              </li>
              <li>
                <a className="bili" href="https://space.bilibili.com/444274979">
                  bilibili
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="team-footer-ul-contact">
              <li>
                <p>联系我们</p>
              </li>

              <li>
                <a className="address" title="地址：前湖校区学生公寓7栋0层">
                  地址：前湖校区学生公寓7栋0层
                </a>
              </li>
              <li>
                <a
                  href="mailto:ncuadmin@163.com"
                  title="邮箱：ncuadmin@163.com"
                  className="mail"
                >
                  邮箱：ncuadmin@163.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0791-83969124"
                  title="电话：0791-83969124"
                  className="tel"
                >
                  电话：0791-83969124
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
