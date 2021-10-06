import React, { Ref, useRef } from 'react';
import CountUp, { useCountUp } from "react-countup";
import clockIcon from '@/assets/img/clock-icon.svg';
import avatarIcon from '@/assets/img/avatar-icon.svg';
import trophyIcon from '@/assets/img/trophy-icon.svg';
import './style.scss';

interface achivementItem {
  title: string;
  iconPath: string;
  startVal: number;
  endVal: number;
  descWord: string;
}

const achivements: achivementItem[] = [
  {
    title: "成立时间",
    iconPath: clockIcon,
    startVal: 1921,
    endVal: 2001,
    descWord: "年"
  },
  {
    title: "用户量",
    iconPath: avatarIcon,
    startVal: 0,
    endVal: 20,
    descWord: "W+"
  },
  {
    title: "获奖情况",
    iconPath: trophyIcon,
    startVal: 0,
    endVal: 10,
    descWord: "余项"
  },
];

const HomeAchievementItem: React.FC<achivementItem> = ({ title, iconPath, startVal, endVal, descWord }) => {
  const actionNum = useRef(null);
  // let numberAction = new CountUp("actionNum", targetVal, options)
  const { start } = useCountUp({
    ref: actionNum,
    start: startVal,
    end: endVal,
    duration: 3,
    useEasing: true
  })

  return (
    <div className="home-ach-item">
      <img className="home-ach-item-icon" src={iconPath} />
      <div className="home-ach-item-title">{title}</div>
      <p style={{ margin: "5px" }}>
        <span ref={actionNum}></span>
        <span>{descWord}</span>
      </p>
    </div>
  );
};

const HomeAchievement: React.FC = () => {
  return (
    <div className="home-ach">
      {achivements.map(({ title, iconPath, startVal, endVal, descWord }) => {
        return (
          <HomeAchievementItem title={title} iconPath={iconPath} startVal={startVal} endVal={endVal} descWord={descWord} key={title} />
        );
      })}
    </div>
  );
};

export default HomeAchievement;
