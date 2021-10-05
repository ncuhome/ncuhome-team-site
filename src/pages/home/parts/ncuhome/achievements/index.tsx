import React from 'react';
import clockIcon from '@/assets/img/clock-icon.svg';
import avatarIcon from '@/assets/img/avatar-icon.svg';
import trophyIcon from '@/assets/img/trophy-icon.svg';
import './style.scss';

interface AchivementItem {
  title: string;
  iconPath: string;
}

const achivements: AchivementItem[] = [
	{ title: '成立时间', iconPath: clockIcon },
	{ title: '用户量', iconPath: avatarIcon },
	{ title: '获奖情况', iconPath: trophyIcon },
];

const HomeAchievementItem: React.FC<AchivementItem> = ({ title, iconPath }) => (
	<div className="home-ach-item">
		<img className="home-ach-item-icon" src={iconPath} />
		<div className="home-ach-item-title">{title}</div>
	</div>
);

const HomeAchievement: React.FC = () => (
	<div className="home-ach">
		{achivements.map(({ title, iconPath }) => (
			<HomeAchievementItem title={title} iconPath={iconPath} key={title} />
		))}
	</div>
);

export default HomeAchievement;
