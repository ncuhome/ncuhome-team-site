import React from "react";
import teamBg from "@/assets/img/team-bg.png";
import BoldButton from "../components/BoldButton";
import "./style.scss";
import { useHistory } from "react-router-dom";

const Team: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-team-wrapper">
      <div className="home-team-l-bg">
        <div className="home-team-text">
          <div className="home-team-title home-title">Team Work</div>
          <div className="home-team-desc">
            <p>家园人在工作</p>
            <p>全体大会上的我们</p>
          </div>
          <div onClick={() => history.push("./team")}>
            <BoldButton text="JOIN US" bgColor="#ABD9F8" />
          </div>
        </div>
        <div className="home-team-bottom">
          <img src={teamBg} alt="team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
