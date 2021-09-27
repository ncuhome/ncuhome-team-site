import React, { useState, useEffect} from 'react';
import AboutMobile from "./about_mobile";
import AboutPC from './about_pc';

const AboutUs: React.FC = () => {
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
        <AboutMobile/>
        :
        <AboutPC />
      }
    </div>
  )
}

export default AboutUs;