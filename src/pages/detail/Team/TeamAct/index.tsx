import React from "react";
import teamActTrail from "@/assets/img/team-act-trail.svg";
import teamAct from "@/assets/img/team-act-img.svg";
import "./style.scss"


interface childProps {
  ActTitle_EN: string,
  ActTitle_CN: string,
  ActTime: string,
  ActDes: string,
}

const TeamAct: React.FC<childProps> = (props) => {
  return (
    <div className="team-act-wrapper">
      <img src={teamAct} className="team-act-img" />
      <img src={teamActTrail} className="team-act-trail" />
      <div className="team-act-text">
        <div>
          <h1 style={{fontSize:"30px"}}>{props.ActTitle_EN}</h1><br />
          <span style={{fontSize:"30px"}}>{props.ActTitle_CN} </span>
          <span style={{fontSize:"15px",marginLeft:"8px"}}>{props.ActTime}</span>
        </div>
        <div style={{fontSize:"17px",marginTop:"20px",whiteSpace:"pre"}}>
          {props.ActDes}
        </div>
      </div>

    </div>
  )
}

export default TeamAct;