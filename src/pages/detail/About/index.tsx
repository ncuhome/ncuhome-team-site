import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import Header from "../../Header";
import about_bg from "@/assets/img/about-bg.svg";
import BoldButton from "../../home/components/BoldButton";

const About = () => {
  const history = useHistory();

  return (
    <div className="about-wrapper">
      <div className="about-header-wrapper">
        <Header />
      </div>
      <div className="about-content-wrapper">
        <div className="about-content-img-area">
          <img src={about_bg} />
        </div>
        <div className="about-content-text">
          <p className="about-content-text-1">JOIN US</p>
          <p className="about-content-text-2" >Work & Play together </p>
          <div className="about-content-botton-area">
            <div onClick={() => history.push("./oldregister")}>
              <BoldButton text="老生招聘" bgColor="#1B8FF4" />
            </div>
            <BoldButton text="新生招聘" bgColor="#1B8FF4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
