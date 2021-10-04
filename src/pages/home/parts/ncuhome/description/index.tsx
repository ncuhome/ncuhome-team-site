import React from 'react';
import home from '@/assets/img/home.svg';
import './style.scss';

const HomeDesc: React.FC = () => (
  <div className="home-desc">
    <div className="home-name">
      <div className="home-desc-eng">NCUHOME</div>
      <img src={home} alt="characters" />
    </div>

    <div className="home-desc-intro">
      <p>家园工作室成立于 2001 年，是南昌大学一个互联网的学生社团组织。以服务师生为目标，以改变世界为愿景。发布上线了数款互联网产品，培养了许多优秀的互联网从业者</p>
    </div>
  </div>
);

export default HomeDesc;
