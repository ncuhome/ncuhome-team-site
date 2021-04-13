import Slider from "react-slick";
import React from "react";
import TeamBG1 from "@/assets/img/TeamBG1.png";
import TeamBG2 from "@/assets/img/TeamBG2.png";
import TeamBG3 from "@/assets/img/TeamBG3.png";
import TeamBG4 from "@/assets/img/TeamBG4.png";
import TeamBG5 from "@/assets/img/TeamBG5.png";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TeamSlider:React.FC = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src={TeamBG1} />
      </div>
      <div>
        <img src={TeamBG2} />
      </div>
      <div>
        <img src={TeamBG3} />
      </div>
      <div>
        <img src={TeamBG4} />
      </div>
      <div>
        <img src={TeamBG5} />
      </div>
    </Slider>
  );
};

export default TeamSlider;
