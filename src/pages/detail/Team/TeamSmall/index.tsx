import React, { useRef } from "react";
import Slider from "react-slick";
import "./style.scss";
import Header from "../../../Header";
import TeamAct from "./TeamAct";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import ArrowLeft from "@/assets/img/arrow-left.png";
import ArrowRight from "@/assets/img/arrow-right.png";
import team_play from "@/assets/img/team-act-play.svg";
import team_share from "@/assets/img/team-act-share.svg";
import downHandle from "@/assets/img/down-handle.png";

const TeamSmall: React.FC = () => {
  const settings = {
    adaptiveHeight:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const sliderRef: any = useRef();

  return (
    <div className="team-wrapper">
      <div className="team-header-wrapper">
        <Header />
      </div>
      <div className="team-slider-wrapper">
        <TeamSlider />
      </div>
      <div className="team-content-rectangle"><img style={{ width: "25px" }} src={downHandle} /></div>
      <div className="team-content-wrapper">
        <div className="team-content-actcard">
          <img src={team_play} />
          <div className="actcard-title">
            To do Things
          </div>
          <div className="actcard-desc">
            创意输出、设计呈现、开发测试、运营推广······我们一步一步摸索，以力求完美的精神，不甘平庸的态度，实现产品的从0到1···
          </div>
        </div>
        <div className="team-content-actcard">
          <img src={team_share} />
          <div className="actcard-title">
            Share Us
          </div>
          <div className="actcard-desc">
            每一届都有优秀的家园人返回家园为后辈们做分享，不论是经验分享，还是技术传授，皆是一场新奇交流，此外，家园还提供各组培训和大量书籍帮助家园人不断提升。
          </div>
        </div>
        <div className="team-content-rectangle">
          <img style={{ width: "25px", marginBottom: "50px" }} src={downHandle} />
          <p style={{ zIndex: 1, marginBottom: "-430px", marginRight: "35%", fontSize: "35px", letterSpacing: "5px" }} >ACTIVITY</p>
        </div>
      </div>

      <div className="c-wrapper">
        <div className="c-content-act">
          <Slider ref={sliderRef} {...settings}>
            <TeamAct
              ActTitle_EN="CELEBRATION"
              ActTitle_CN="周年庆"
              ActTime="2020.5.23"
              ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去
展望未来的初心与决心。"/>
            <TeamAct
              ActTitle_EN="CELEBRATION"
              ActTitle_CN="周年庆"
              ActTime="2020.5.23"
              ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去
展望未来的初心与决心。"/>

          </Slider>
        </div>
        <div>
          <img onClick={() => sliderRef.current.slickPrev()} style={{ width: "30px", marginLeft: "100px" }} src={ArrowLeft} />
          <img onClick={() => sliderRef.current.slickNext()} style={{ width: "30px", marginLeft: "60px" }} src={ArrowRight} />
        </div>
      </div>
      <div className="team-footer-wrapper">
        <TeamFooter />
      </div>
    </div>
  );
};

export default TeamSmall;
