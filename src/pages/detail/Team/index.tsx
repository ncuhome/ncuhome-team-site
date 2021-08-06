import React, { useState } from 'react';
import TeamSmall from "./TeamSmall";
import TeamBig from './TeamBig';

const Team: React.FC = () => {
  const windowWidth = window.outerWidth;
  return (
    <div>
      {windowWidth < 768 ?
        <TeamSmall />
        :
        <TeamBig />
      }
    </div>
  )
}

export default Team;