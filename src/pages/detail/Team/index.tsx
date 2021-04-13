import BoldButton from "@/pages/home/components/BoldButton";
import React from "react";
import "./style.scss";
import Header from "../../Header";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import line3 from "@/assets/img/line3.png";

const Team: React.FC = () => {
  return (
    <div className="team-wrapper">
      <div className="team-header-wrapper">
        <Header />
      </div>
      <div className="team-slider-wrapper">
        <TeamSlider />
      </div>
      <div className="team-content-rectangle"></div>
      <div className="team-content-wrapper">
        <img src={line3} />
        <div className="team-content-title1">
          <p>WE, NCUHOMERS</p>
        </div>
        <img src={line3} />
      </div>
      <div className="c-wrapper"></div>
      <div>
        <TeamFooter />
      </div>
    </div>
  );
};

export default Team;
