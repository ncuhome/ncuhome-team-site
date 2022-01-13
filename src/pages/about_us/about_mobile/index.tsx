import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';
import TeamAct from './TeamAct';
import TeamSlider from './TeamSlider';
import TeamFooter from './TeamFooter';
import ArrowLeft from '@/assets/img/arrow-left.png';
import ArrowRight from '@/assets/img/arrow-right.png';
import team_play from '@/assets/img/team-act-play.jpg';
import hackweek from '@/assets/img/hackweek.png';
import downHandle from '@/assets/img/down-handle.png';

const TeamSmall: React.FC = () => {
  const settings = {
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef<Slider>(null);

  return (
    <div>
      <div className={styles.team_wrapper}>
        <div className={styles.team_slider_wrapper}>
          <TeamSlider />
        </div>
        <div className={styles.team_content_rectangle}><img style={{ width: '25px' }} src={downHandle} /></div>
        <div className={styles.team_content_wrapper}>
          <div className={styles.team_content_actcard}>
            <img src={team_play} />
            <div className={styles.actcard_title}>
             家园人
            </div>
            <div className={styles.actcard_desc}>
              家园最宝贵的财富
            </div>
          </div>
          <div className={styles.team_content_actcard}>
            <img src={hackweek} />
            <div className={styles.actcard_title}>
              HackWeek
            </div>
            <div className={styles.actcard_desc}>
              家园人骨子里的不安分
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team_content_actcard_rectangle}>
        <img style={{ width: '25px', marginTop: '20px' }} src={downHandle} />

      </div>
      <div
        style={{
          padding: '20px',
          height: '400px',
          backgroundColor: '#f4f4f5',
        }}
        className={styles.c_wrapper}
      >
        <p style={{
          marginTop: '-40px', marginRight: '35%', marginBottom: '5%', fontSize: '35px', letterSpacing: '5px',
        }}
        >
          ACTIVITY
        </p>
        <div style={{
          width: '90%',
        }}
        >
          <Slider ref={sliderRef} {...settings}>
            <TeamAct
              imgName="https://incu-orbit.ncuos.com/18.jpg"
              ActTitle_EN="CELEBRATION"
              ActTitle_CN="周年庆"
              ActTime="2020.5.23"
              ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去r s
展望未来的初心与决心"
            />
            <TeamAct
              imgName="https://incu-orbit.ncuos.com/18.jpg"
              ActTitle_EN="CELEBRATION"
              ActTitle_CN="周年庆"
              ActTime="2020.5.23"
              ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去
展望未来的初心与决心"
            />

          </Slider>
        </div>
        <div style={{ marginBottom: '5%' }}>
          <img onClick={() => sliderRef.current?.slickPrev()} style={{ width: '30px', marginLeft: '100px' }} src={ArrowLeft} />
          <img onClick={() => sliderRef.current?.slickNext()} style={{ width: '30px', marginLeft: '60px' }} src={ArrowRight} />
        </div>
      </div>
      <div className={styles.team_wrapper}>
        <TeamFooter />
      </div>
    </div>
  );
};

export default TeamSmall;
