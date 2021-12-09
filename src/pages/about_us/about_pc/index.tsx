import React, { useRef } from 'react';
import Slider from 'react-slick';
import TeamAct from './TeamAct';
import TeamSlider from './TeamSlider';
import TeamFooter from './TeamFooter';
import ArrowLeft from '@/assets/img/arrow-left.png';
import ArrowRight from '@/assets/img/arrow-right.png';
import team_play from '@/assets/img/team-act-play.svg';
import team_share from '@/assets/img/team-act-share.svg';
import downHandle from '@/assets/img/down-handle.png';
import line3 from '@/assets/img/line3.png';
import cxy from '@/assets/img/cxy.jpg';
import './style.scss';

const settings = {
  infinite: true,
  autoplayspeed: 300,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const TeamBig: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="team-wrapper">
      <div className="team-slider-wrapper">
        <TeamSlider />
      </div>
      <div className="team-content-rectangle">
        <img style={{ width: '25px' }} src={downHandle} />
      </div>
      <div className="team-content-wrapper">
        <div className="team-content-title">
          <img style={{ height: '1px' }} src={line3} />
          <div>
            <p style={{ fontSize: '22px', margin: '0 12px' }}>
              WE ARE NCUHOMERS
            </p>
          </div>
          <img style={{ height: '1px' }} src={line3} />
        </div>
        <div className="team-content-actcard-left">
          <img src={team_play} />
          <div>
            To do <br />
            Things
          </div>
        </div>
        <div className="team-content-actcard-right">
          <div>
            <p>Share</p>
            <p>US</p>
          </div>
          <img src={team_share} />
        </div>
        <div className="team-content-rectangle">
          <img style={{ width: '25px' }} src={downHandle} />
        </div>
      </div>

      <div className="c-wrapper">
        <p
          style={{
            marginTop: '-20px',
            marginLeft: '40px',
            fontSize: '40px',
            letterSpacing: '5px',
          }}
        >
          ACTIVITY
        </p>
        <div className="c-content-act">
          <Slider ref={sliderRef} {...settings}>
            <TeamAct
              imgName="https://incu-orbit.ncuos.com/18.jpg"
              actTitle_CN="周年庆"
              actTime="2021.5.23"
              actDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去
展望未来的初心与决心。"
            />
            <TeamAct
              imgName="https://incu-orbit.ncuos.com/19.png"
              actTitle_CN="全体大会"
              actTime="2021.3.28"
              author="许碧霄"
              actDes="
家园人相聚的盛宴
沉浸在专属我们的旋律里
因热爱而无惧
邂逅值得珍藏的记忆。"
            />
            <TeamAct
              imgName="https://incu-orbit.ncuos.com/20.jpg"
              actTitle_CN="冬至奇遇"
              actTime="2020.12.23"
              author="熊雨桐"
              actDes="
专属家园人的冬至冒险
国王与小天使的奇遇
其实是相互依偎的
温暖与被温暖。"
            />
            <TeamAct
              imgName={cxy}
              actTitle_CN="程序员大改造"
              actTime="2021.10.24"
              author="梁最"
              actDes="
一年一度的程序员大改造
想不到的打扮 想不到的妆容
这一次，我们做出了违背祖宗的决定
把程序员真正改造成了“程序媛”。"
            />
          </Slider>
        </div>

        <div className="team-slider-bottom-container">
          <div
            className="team-slider-bottom-item"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img style={{ width: '30px' }} src={ArrowLeft} />
          </div>
          <div style={{ width: '32px' }} />
          <div
            className="team-slider-bottom-item"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img style={{ width: '30px' }} src={ArrowRight} />
          </div>
        </div>
      </div>
      <div className="team-footer-wrapper">
        <TeamFooter />
      </div>
    </div>
  );
};

export default TeamBig;
