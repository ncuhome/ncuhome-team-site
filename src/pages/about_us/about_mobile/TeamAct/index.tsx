import React from "react";
import styles from "./style.module.scss";

interface childProps {
  imgName: string;
  actTitle_EN: string;
  actTitle_CN: string;
  actTime: string;
  actDes: string;
}

const TeamAct: React.FC<childProps> = (props) => (
  <div className={styles.team_act_wrapper}>
    <img src={props.imgName} className={styles.team_act_img} />
    <div className={styles.team_act_text}>
      <div className={styles.team_act_text_area}>
        <span className={styles.title}>{props.actTitle_CN}</span>
        <span style={{ fontSize: "12px", color: "#3e4042" }}>
          {props.actTime}
        </span>
      </div>
      <div style={{ fontSize: "13px", whiteSpace: "pre" }}>{props.actDes}</div>
    </div>
  </div>
);

export default TeamAct;
