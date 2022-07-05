import React, { useState } from "react";
import about_bg from "@/assets/img/about-bg.svg";
import BoldButton from "@/components/bold_button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const About: React.FC = () => {
  const renderContent = () => {
    return (
      <div style={{ fontSize: "14px", lineHeight: "18px"}}>
        <div style={{ fontSize: "14px", marginBottom: 8 }}>
          🦄 老生报名请直接将简历（可添加作品集）发送至:{" "}
          <a style={{ color: "#1B8FF4" }} href={"mailto:hr@ncuhome.club"}>
            hr@ncuhome.cn
          </a>
        </div>

        <div style={{ marginBottom: 5 }}>
          文件名格式: 【家园工作室 + 岗位】年级-姓名{" "}
        </div>
      </div>
    );
  };

  const openDialog = () => {
    toast(renderContent(), {
      position: "bottom-center",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
    });
  };

  return (
    <div className="about_wrapper">
      <div className="about_content_wrapper">
        <div className="about_content_img_area">
          <img src={about_bg} />
        </div>
        <div className="about_content_text">
          <p
            style={{
              color: "white",
              fontSize: "50px",
              margin: "30px",
              letterSpacing: 10,
            }}
          >
            JOIN US
          </p>
          <p style={{ color: "white", fontSize: "16px", letterSpacing: 1 }}>
            // 用不长的四年，做几件值得骄傲一生的事情 //
          </p>
          <div className="about_content_button_area">
            <div className="about_content_button">
              <div onClick={openDialog}>
                <BoldButton
                  text="🥳 老生投递"
                  bgColor="#2e2e2e"
                  textColor={"#fff"}
                  borderColor={"#e2e2e2"}
                />
              </div>
            </div>
            <div className="about_content_button">
              <div
                onClick={() => {
                  window.open("https://www.wenjuan.com/s/UZBZJvWTLL");
                }}
              >
                <BoldButton
                  text="🥰 新生专区"
                  bgColor="transparent"
                  textColor={"#fff"}
                  borderColor={"#e2e2e2"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default About;
