import React from "react";
import AboutMobile from "./about_mobile";
import AboutPC from "./about_pc";
import useIsMobile from "@/hooks/useIsMobile";

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <AboutMobile /> : <AboutPC />}</div>;
};

export default AboutUs;
