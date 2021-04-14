import React from "react";
import "./style.scss";
import Header from "../../Header";
import aboutBG from "@/assets/img/aboutBG.png";
import BoldButton from "../../home/components/BoldButton";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-header-wrapper">
        <Header />
      </div>
      <div className="about-content-wrapper">
        <img className="about-content-img" src={aboutBG} alt="" />
        <div className="about-content-botton1">
          <BoldButton text="老生招聘" bgColor="#1B8FF4" />
        </div>
        <div className="about-content-botton2">
          <BoldButton text="新生招聘" bgColor="#1B8FF4" />
        </div>
      </div>
    </div>
  );
};

export default About;
