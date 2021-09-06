import Slider from "react-slick";
import React from "react";
import "./style.scss"
import TeamBG1 from "@/assets/img/teamBG1_s.svg";
import TeamBG2 from "@/assets/img/teamBG2_s.svg";
import TeamBG3 from "@/assets/img/teamBG3_s.svg";
import TeamBG4 from "@/assets/img/teamBG4_s.svg";
import TeamBG5 from "@/assets/img/teamBG5_s.svg";

const settings = {
  autoplay: true,
  fade: true,
  infinite: true,
  autoplayspeed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TeamSlider: React.FC = () => {
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img className="slider-img" src={TeamBG1} />
        </div>
        <div>
          <img className="slider-img" src={TeamBG2} />
        </div>
        <div>
          <img className="slider-img" src={TeamBG3} />
        </div>
        <div>
          <img className="slider-img" src={TeamBG4} />
        </div>
        <div>
          <img className="slider-img" src={TeamBG5} />
        </div>
      </Slider>
    </div>

  );
};

export default TeamSlider;
