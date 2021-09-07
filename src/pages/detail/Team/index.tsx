import React, { useState, useEffect} from 'react';
import TeamSmall from "./TeamSmall";
import TeamBig from './TeamBig';

const Team: React.FC = () => {
  const [isMobile,setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", onResize)
  },[])
  return (
    <div>
      {isMobile ?
        <TeamSmall/>
        :
        <TeamBig />
      }
    </div>
  )
}

export default Team;