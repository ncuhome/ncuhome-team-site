import React from "react";
import Header from "../../Header";
import NewAboutSlider from "./NewAbout/NewAboutSlider";
import aboutBG from "@/assets/img/aboutBG.png";
import BoldButton from "../../home/components/BoldButton";

const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <NewAboutSlider />
    </div>
  );
};

export default About;
