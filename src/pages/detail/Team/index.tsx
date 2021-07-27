import React from "react";
import "./style.scss";
import Header from "../../Header";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import team_play from "@/assets/img/team-act-play.svg";
import team_share from "@/assets/img/team-act-share.svg";
import downHandle from "@/assets/img/down-handle.png";
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
      <div className="team-content-rectangle"><img style={{ width: "25px" }} src={downHandle} /></div>
      <div className="team-content-wrapper">
        <div className="team-content-title">
          <img style={{height:"1px"}} src={line3} />
          <div>
            <p style={{fontSize: "22px"}}>WE, NCUHOMERS</p>
          </div>
          <img src={line3} />
        </div>
        <div className="team-content-actcard-left">
          <img src={team_play}/>
          <div>
            To do <br/>
            Things
          </div>
        </div>
        <div className="team-content-actcard-right">
          <div>
            <p>Share</p> 
            <p>US</p>
          </div>
          <img src={team_share} />
        </div>
        <div className="team-content-rectangle"><img style={{ width: "25px" }} src={downHandle} /></div>
      </div>
      
      <div className="c-wrapper">
        
      </div>
      <div className="team-footer-wrapper">
        <TeamFooter />
      </div>
    </div>
  );
};

export default Team;
