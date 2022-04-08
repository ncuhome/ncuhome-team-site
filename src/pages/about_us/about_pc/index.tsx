import React, { useRef } from "react";
import Slider from "react-slick";
import TeamAct from "./TeamAct";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import ArrowLeft from "@/assets/img/arrow-left.png";
import ArrowRight from "@/assets/img/arrow-right.png";
import team_play from "@/assets/img/team-act-play.jpg";
import hackweek from "@/assets/img/hackweek.png";
import downHandle from "@/assets/img/down-handle.png";
import line3 from "@/assets/img/line3.png";
import { teamActivity, teamContent } from "../content";
import "./style.scss";

const settings = {
  infinite: true,
  autoplayspeed: 300,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const TeamBig: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="team-wrapper">
      <div className="team-slider-wrapper fade-in">
        <TeamSlider />
      </div>
      <div className="team-content-rectangle">
        <img style={{ width: "25px" }} src={downHandle} />
      </div>
      <div className="team-content-wrapper">
        <div className="team-content-title">
          <img style={{ height: "1px" }} src={line3} />
          <div>
            <p
              style={{
                fontSize: "22px",
                margin: "0 12px",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}
            >
              WE ARE NCUHOMERS
            </p>
          </div>
          <img style={{ height: "1px" }} src={line3} />
        </div>
        <div className="team-content-actcard-left">
          <img src={team_play} />
          <div className="text-container fade-in-fast">
            <p className="title">{teamContent.left.title}</p>
            <p className="decs">{teamContent.left.decs}</p>
          </div>
        </div>
        <div className="team-content-actcard-right">
          <div className="text-container fade-in-fast">
            <p className="title">{teamContent.right.title}</p>
            <p className="decs">{teamContent.right.decs}</p>
          </div>
          <img src={hackweek} />
        </div>
        <div className="team-content-rectangle">
          <img style={{ width: "25px", height: "25px" }} src={downHandle} />
        </div>
      </div>

      <div className="c-wrapper">
        <p
          style={{
            marginTop: "-20px",
            marginLeft: "40px",
            fontSize: "40px",
            letterSpacing: "5px",
          }}
        >
          ACTIVITY
        </p>
        <div className="c-content-act">
          <Slider ref={sliderRef} {...settings}>
            {teamActivity.map((item, index) => (
              <TeamAct {...item} key={index} />
            ))}
          </Slider>
        </div>

        <div className="team-slider-bottom-container">
          <div
            className="team-slider-bottom-item"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img style={{ width: "30px" }} src={ArrowLeft} />
          </div>
          <div style={{ width: "32px" }} />
          <div
            className="team-slider-bottom-item"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img style={{ width: "30px" }} src={ArrowRight} />
          </div>
        </div>
      </div>
      <div className="team-footer-wrapper">
        <TeamFooter />
      </div>
    </div>
  );
};

export default TeamBig;
