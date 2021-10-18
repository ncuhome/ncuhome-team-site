import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import BoldButton from '@/pages/components/bold_button';
import circle from '@/assets/img/circle.png';
import line from '@/assets/img/line.png';

const About: React.FC = () => {
  const history = useHistory();
  return (
    <div className="home-about-wrapper">
      <div className="home-about-content">
        <img src={circle} />
        <div className="home-about-desc">
          <p className="home-about-title">Work&Play</p>
          <p className="home-about-text1">TOGETHER</p>
          <img src={line} />
          <p className="home-about-text2">
            家园欢迎每一位热爱互联网的的出色青年
          </p>
          <div onClick={() => history.push('./about')}>
            <BoldButton text="JOIN US" bgColor="#ABD9F8" />
          </div>
        </div>
      </div>
      <div className="home-about-bottom">
        <ul>
          <li>
            <ul className="home-about-ul-about">
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
            <ul className="home-about-ul-contact">
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
