import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import TeamAct from "./TeamAct";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import ArrowLeft from "@/assets/img/arrow-left.png";
import ArrowRight from "@/assets/img/arrow-right.png";
import team_play from "@/assets/img/team-act-play.jpg";
import hackweek from "@/assets/img/hackweek.png";
import downHandle from "@/assets/img/down-handle.png";
import { teamActivity, teamContent } from "../content";

const settings = {
  arrows: false,
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TeamSmall: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div>
      <div className={styles.team_wrapper}>
        <div className={styles.team_slider_wrapper}>
          <TeamSlider />
        </div>
        <div className={styles.team_content_rectangle}>
          <img style={{ width: "25px" }} src={downHandle} />
        </div>
        <div className={styles.team_content_wrapper}>
          <div className={styles.team_content_actcard}>
            <img src={team_play} />
            <div className={styles.actcard_title}>{teamContent.left.title}</div>
            <div className={styles.actcard_desc}>{teamContent.left.decs}</div>
          </div>
          <div className={styles.team_content_actcard}>
            <img src={hackweek} />
            <div className={styles.actcard_title}>
              {teamContent.right.title}
            </div>
            <div className={styles.actcard_desc}>{teamContent.right.decs}</div>
          </div>
        </div>
      </div>
      <div className={styles.team_content_actcard_rectangle}>
        <img style={{ width: "25px", marginTop: "20px" }} src={downHandle} />
      </div>
      <div
        style={{
          padding: "20px",
          height: "400px",
          backgroundColor: "#f4f4f5",
        }}
        className={styles.c_wrapper}
      >     
        <p className={styles.active_text}>ACTIVITY</p>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {teamActivity.map((item, index) => (
              <TeamAct {...item} key={index} />
            ))}
          </Slider>
        </div>
        <div style={{ marginBottom: "5%" }}>
          <img
            onClick={() => sliderRef.current?.slickPrev()}
            style={{ width: "30px", marginLeft: "100px" }}
            src={ArrowLeft}
          />
          <img
            onClick={() => sliderRef.current?.slickNext()}
            style={{ width: "30px", marginLeft: "60px" }}
            src={ArrowRight}
          />
        </div>
      </div>
      <div className={styles.team_wrapper}>
        <TeamFooter />
      </div>
    </div>
  );
};

export default TeamSmall;
