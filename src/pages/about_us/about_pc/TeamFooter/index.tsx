import React, { ReactNode } from 'react';
import BoldButton from '@/components/bold_button';
import CompanyLogo from '@/assets/img/CompanyLogo.png';
import './style.scss';

const Bubbles: ReactNode = (
  <>
    <div className="bubble1"> </div>
    <div className="bubble2"> </div>
    <div className="bubble3"> </div>
    <div className="bubble4"> </div>
    <div className="bubble5"> </div>
  </>
);

const About: React.FC = () => (
  <div className="team-footer-wrapper">
    <div className="team-footer-top">
      <p className="team-footer-top-text1 fade-in-fast">Ncuhomers</p>
      <p className="team-footer-top-text2 fade-in-fast">Travel</p>
      <p className="team-footer-top-text3 fade-in-fast">Around the World</p>
      <img className="team-footer-top-img fade-in-fast" src={CompanyLogo} alt="company" />
    </div>
    <div className="team-footer-middle">
      <p className="team-footer-middle-text1 fade-in-fast">
        Let&apos;s make something great
      </p>
      <br />
      <p className="team-footer-middle-text2 fade-in-fast">together</p>
      <div className="team-footer-middle-btn fade-in-fast"
        onClick={() => window.location.replace('/join-us')}>
        <BoldButton text="JOIN US" theme="light" bgColor="#FAFCFF" />
      </div>
      {Bubbles}
    </div>
    <div className="team-footer-bottom">
      <ul className="team-footer-list">
        <li>
          <ul>
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
          <ul>
            <li>
              <p>联系我们</p>
            </li>

            <li>
              <a className="address" href="https://j.map.baidu.com/0d/Il6c" title="地址：前湖校区学生公寓7栋0层">
                地址：前湖校区学生公寓7栋0层
              </a>
            </li>
            <li>
              <a
                href="mailto:center@ncuhome.club"
                title="邮箱：center@ncuhome.club"
                className="mail"
              >
                邮箱：center@ncuhome.club
              </a>
            </li>
            {/* <li>
              <a
                href="tel:0791-83969124"
                title="电话：0791-83969124"
                className="tel"
              >
                电话：0791-83969124
              </a>
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
