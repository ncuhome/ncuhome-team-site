import React, { Suspense, lazy } from "react";
import introBg from "@/assets/img/intro-bg.png"
import "./style.scss";

const HomeDesc = lazy(() => import("./HomeDesc"));
const HomeAchievement = lazy(() => import("./HomeAchievement"));

const Ncuhome: React.FC = () => {
  return (
    <Suspense fallback={''}>
      <div className="ncuhome-wrapper">
        <div className="ncuhome-left">
          <HomeDesc />
          <HomeAchievement />
        </div>
        <div className="ncuhome-right">
          <div className="ncuhome-rt-bg">
            <img src={introBg} alt="" />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Ncuhome;
