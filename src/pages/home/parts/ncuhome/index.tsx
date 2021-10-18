import React, { Suspense, lazy } from 'react';
import introBg from '@/assets/img/intro-bg.png';
import './style.scss';

const Description = lazy(() => import('./description'));
const Achievement = lazy(() => import('./achievements'));

const Ncuhome: React.FC = () => (
  <Suspense fallback="">
    <div className="ncuhome-wrapper">
      <div className="ncuhome-left">
        <Description />
        <Achievement />
      </div>
      <div className="ncuhome-right">
        <div className="ncuhome-rt-bg">
          <img src={introBg} alt="" />
        </div>
      </div>
    </div>
  </Suspense>
);

export default Ncuhome;
