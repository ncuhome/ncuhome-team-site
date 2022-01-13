import React from "react";
import Description from "./description"
import Achievement from "./achievements"
import introBg from "@/assets/img/intro-bg.png";
import "./style.scss";

const Ncuhome: React.FC = () => (
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
);

export default Ncuhome;
