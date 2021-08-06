import React from "react";
import BoldButton from "../../../../home/components/BoldButton"
import CompanyLogo from "@/assets/img/CompanyLogo.png"
import "./style.scss";

const About: React.FC = () => {
  return (
    <div className="team-footer-wrapper-b">
      <div className="team-footer-top-b">
        <p className="team-footer-top-text1-b">Ncu Homers </p>
        <p className="team-footer-top-text2-b"> travel</p>
        <p className="team-footer-top-text3-b"> around the world</p>
        <div className="team-footer-top-img-b">
          <img src={CompanyLogo} alt="company" />
        </div>
      </div>
      <div className="team-footer-middle-b">
        <p className="team-footer-middle-text1-b">Let's make something great</p><br />
        <p className="team-footer-middle-text2-b">together</p>
        <div className="team-footer-middle-btn-b">
          <div className="bold-btn-team-b">Join us</div>
        </div>
      </div>
      <div className="team-footer-bottom-b">
        <ul className="team-footer-list-b">
          <li>
            <ul className="team-footer-ul-about-b">
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
            <ul className="team-footer-ul-contact-b">
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
