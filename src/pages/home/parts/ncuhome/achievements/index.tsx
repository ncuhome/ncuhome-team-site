import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import clockIcon from '@/assets/img/clock-icon.svg';
import avatarIcon from '@/assets/img/avatar-icon.svg';
import trophyIcon from '@/assets/img/trophy-icon.svg';
import './style.scss';

interface AchivementItemProps {
  title: string;
  iconPath: string;
  startVal: number;
  endVal: number;
  descWord: string;
}

const achivements: AchivementItemProps[] = [
  {
    title: '成立时间',
    iconPath: clockIcon,
    startVal: 1921,
    endVal: 2001,
    descWord: '年'
  },
  {
    title: '用户量',
    iconPath: avatarIcon,
    startVal: 0,
    endVal: 20,
    descWord: 'W+'
  },
  {
    title: '获奖情况',
    iconPath: trophyIcon,
    startVal: 0, endVal: 10,
    descWord: '余项'
  },
];

const HomeAchievementItem: React.FC<AchivementItemProps> = ({ title, iconPath, startVal, endVal, descWord }) => {
  return (
    <VisibilitySensor partialVisibility >
      {({ isVisible }) => (
        <div className="home-ach-item">
          <img className="home-ach-item-icon" src={iconPath} />
          <div className="home-ach-item-title">{title}</div>
          <p style={{ margin: '5px' }}>
            {isVisible ?
              <CountUp
                start={startVal}
                end={endVal}
                duration={3}
                delay={.3}
                suffix={descWord}
                useEasing
              />
              :
              'xxx'
            }
          </p>
        </div>
      )}
    </VisibilitySensor>
  );
};

const HomeAchievement: React.FC = () => {
  return (
    <div className="home-ach">
      {
        achivements.map((item) => {
          return (
            <HomeAchievementItem {...item} key={item.title} />
          );
        })
      }
    </div>
  );
};

export default HomeAchievement;
