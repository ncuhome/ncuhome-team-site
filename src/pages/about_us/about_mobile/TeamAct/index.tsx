import React from "react";
// import teamAct from "@/assets/img/team-act-img-dark.svg";
import styles from "./style.module.scss"


interface childProps {
  imgName: string,
  ActTitle_EN: string,
  ActTitle_CN: string,
  ActTime: string,
  ActDes: string,
}

const TeamAct: React.FC<childProps> = (props) => {
  return (
    <div className={styles.team_act_wrapper}>
      <img src={props.imgName} className={styles.team_act_img} />
      <div className={styles.team_act_text}>
        <div className={styles.team_act_text_area}>
          <h1 style={{ fontSize: "27px", color: "white", marginTop: "-27px" }}>{props.ActTitle_EN}</h1><br />
          <span style={{ fontSize: "27px" }}>{props.ActTitle_CN} </span>
          <span style={{ fontSize: "12px", marginLeft: "8px" }}>{props.ActTime}</span>
        </div>
        <div style={{ fontSize: "10px", marginTop: "10px", whiteSpace: "pre" }}>
          {props.ActDes}
        </div>
      </div>

    </div>
  )
}

export default TeamAct;