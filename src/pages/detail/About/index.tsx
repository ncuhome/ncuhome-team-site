import React from "react";
import { useHistory } from "react-router-dom";
import about_bg from "@/assets/img/about-bg.svg";
import BoldButton from "../../home/components/BoldButton";
import "./style.scss";

const About = () => {
  const history = useHistory();

  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <div className="about-content-img-area">
          <img src={about_bg} />
        </div>
        <div className="about-content-text">
          <p style={{ color: "white", fontSize: "50px", margin: "50px" }}>JOIN US</p>
          <p style={{ color: "white", fontSize: "20px" }}>Work & Play together </p>
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
