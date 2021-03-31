import React from "react";
import circle from "@/assets/img/circle.png";
import teamBg from "@/assets/img/team-bg.png";
import BoldButton from "../components/BoldButton";
import "./style.scss";

const Team: React.FC = () => {
  return (
    <div className="home-team-wrapper">
      <div className="home-team-l-bg">
        <div className="home-team-text">
          <div className="home-team-title home-title">Team Work</div>
          <img src={circle} alt="circle" />
          <div className="home-team-desc">
            <p>家园人在工作</p>
            <p>全体大会上的我们</p>
          </div>
          <BoldButton text="MORE" bgColor="#fff" />
        </div>
        <div className="home-team-bottom">
        <img className="home-team-bg" src={teamBg} alt="team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
