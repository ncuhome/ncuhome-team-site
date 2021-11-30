import React from 'react';
import './style.scss';

interface childProps {
  imgName: string;
  actTitle_CN: string;
  actTime: string;
  actDes: string;
  author?: string;
}

const TeamAct: React.FC<childProps> = (props) => (
  <div className="team-act-wrapper">
    <img src={props.imgName} className="team-act-img" />
    <div className="team-act-text">
      <div>
        <div className="team-act-time">{props.actTime}</div>
        <div className="team-act-title">{props.actTitle_CN}</div>
      </div>
      <div className="team-act-decs">{props.actDes}</div>
      {props.author && <div className="team-act-author">by {props.author}</div>}
    </div>
  </div>
);

export default TeamAct;
