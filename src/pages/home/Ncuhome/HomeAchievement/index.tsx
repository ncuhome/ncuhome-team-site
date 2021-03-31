import React from "react";
import clockIcon from "@/assets/img/clock-icon.png";
import avatarIcon from "@/assets/img/avatar-icon.png";
import trophyIcon from "@/assets/img/trophy-icon.png";
import "./style.scss";

interface achivementItem {
  title: string;
  iconPath: string;
}

const achivements: achivementItem[] = [
  { title: "成立时间", iconPath: clockIcon },
  { title: "用户量", iconPath: avatarIcon },
  { title: "获奖情况", iconPath: trophyIcon },
];

const HomeAchievementItem: React.FC<achivementItem> = ({ title, iconPath }) => {
  return (
    <div className="home-ach-item">
      <img className="home-ach-item-icon" src={iconPath} />
      <div className="home-ach-item-title">{title}</div>
    </div>
  );
};

const HomeAchievement: React.FC = () => {
  return (
    <div className="home-ach">
      {achivements.map(({ title, iconPath }) => {
        return (
          <HomeAchievementItem title={title} iconPath={iconPath} key={title} />
        );
      })}
    </div>
  );
};

export default HomeAchievement;
