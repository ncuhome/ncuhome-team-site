import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "./components/Dialog";
import about_bg from "@/assets/img/about-bg.svg";
import BoldButton from "../../home/components/BoldButton";
import "./style.scss";

const About: React.FC = () => {
  const history = useHistory();

  const [isShowDialog, setIsShowDialog] = useState(false);

  const openDialog = () => {
    setIsShowDialog(true)
  }

  const closeDialog = () => {
    setIsShowDialog(false)
  }

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
            <div onClick={openDialog}>
              <BoldButton text="🥳 老生招聘" bgColor="#1B8FF4" />
            </div>
            {
              isShowDialog ?
                <Dialog 
                  onOk={closeDialog}
                />
                :
                null
            }
            <div onClick={()=>{window.open("https://2021hr.ncuos.com")}}>
              <BoldButton text="🥰 新生招聘" bgColor="#1B8FF4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
