import BoldButton from "@/pages/home/components/BoldButton";
import React from "react";
import "./style.scss";
import Header from "../../Header";
import TeamSlider from "../components/TeamSlider";

const Team: React.FC = () => {
  return (
    <div className="team-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="slider-wrapper">
      <TeamSlider />
      </div>
      <div className="content-wrapper">

      </div>
      <div className="c-wrapper">

      </div>
    </div>
  );
};

export default Team;
