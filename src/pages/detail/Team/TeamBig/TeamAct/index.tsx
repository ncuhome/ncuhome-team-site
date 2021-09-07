import React from "react";
import teamActTrail from "@/assets/img/team-act-trail.svg";
import "./style.scss"


interface childProps {
  imgName: string,
  ActTitle_EN: string,
  ActTitle_CN: string,
  ActTime: string,
  ActDes: string,
}

const TeamAct: React.FC<childProps> = (props) => {
  console.log(props.imgName)
  return (
    <div className="team-act-wrapper">
      <img src={props.imgName} className="team-act-img" />
      <img src={teamActTrail} className="team-act-trail" />
      <div className="team-act-text">
        <div>
          <h1 className="team-act-text-1" >{props.ActTitle_EN}</h1><br />
          <span className="team-act-text-2" >{props.ActTitle_CN} </span>
          <span className="team-act-text-3" >{props.ActTime}</span>
        </div>
        <div className="team-act-text-4" >
          {props.ActDes}
        </div>
      </div>

    </div>
  )
}

export default TeamAct;