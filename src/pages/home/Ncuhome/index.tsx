import React, { Suspense, lazy } from "react";
import introBg from "@/assets/img/intro-bg.png"
import "./style.scss";

const HomeHeader = lazy(() => import("../../HomeHeader"));
const HomeDesc = lazy(() => import("./HomeDesc"));
const HomeAchievement = lazy(() => import("./HomeAchievement"));

const Ncuhome: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="ncuhome-wrapper">
        <div className="ncuhome-left">
          {/* <HomeHeader /> */}
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
