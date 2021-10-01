import React from "react";
import "./style.scss";

interface childProps {
  imgName: string;
  ActTitle_CN: string;
  ActTime: string;
  ActDes: string;
}

const TeamAct: React.FC<childProps> = (props) => {
  return (
    <div className="team-act-wrapper">
      <img src={props.imgName} className="team-act-img" />
      <div className="team-act-text">
        <div>
          <div className="team-act-time">{props.ActTime}</div>
          <div className="team-act-title">{props.ActTitle_CN}</div>
        </div>
        <div className="team-act-decs">{props.ActDes}</div>
      </div>
    </div>
  );
};

export default TeamAct;
