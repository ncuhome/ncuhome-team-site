import React from 'react';
import padHand from '@/assets/img/pad-hand.png';
import BoldButton from '@/components/bold_button';
import './style.scss';
import { useHistory } from 'react-router-dom';

const Products: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-prod-wrapper">
      <div className="home-prod-left">
        <img src={padHand} alt="" />
      </div>
      <div className="home-prod-right">
        <div className="home-prod-title home-title">
          Products
          <p className="sub-title">灵感在这里落地生根</p>
        </div>
        <div className="home-prod-desc">
          <p>南大家园 —— 改变，从这里开始</p>
          <p>香樟祺 —— 疫情之下，南大学子的安全保障</p>
          <p>云家园 —— 数字化南大，尽在掌握</p>
          <p>US —— 专属于家园人的网络社区</p>
        </div>
        <div onClick={() => history.push('./products')}>
          <BoldButton text="MORE" bgColor="#ABD9F8" />
        </div>
      </div>
    </div>
  );
};

export default Products;
