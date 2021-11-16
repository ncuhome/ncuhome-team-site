import React from 'react';
import padHand from '@/assets/img/pad-hand.png';
import BoldButton from '@/pages/components/bold_button';
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
        </div>
        <div className="home-prod-desc">
          <p>南大家园APP —— 改变，从这里开始</p>
          <p>云家园 —— 数字化南大，尽在掌握</p>
        </div>
        <div onClick={() => history.push('./products')}>
          <BoldButton text="MORE" bgColor="#ABD9F8" />
        </div>
      </div>
    </div>
  );
};

export default Products;
