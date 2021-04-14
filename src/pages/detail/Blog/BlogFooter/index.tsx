import React from "react";
import "./style.scss";

const About: React.FC = () => {
  return (
    <div className="blog-footer-wrapper">
      <div className="blog-footer-bottom">
        <ul>
          <li>
            <ul className="blog-footer-ul-about">
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
            <ul className="blog-footer-ul-contact">
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