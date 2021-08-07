import React,{useRef} from "react";
import Slider from "react-slick"
import TeamAct from "./TeamAct";
import TeamSlider from "./TeamSlider";
import TeamFooter from "./TeamFooter";
import ArrowLeft from "@/assets/img/arrow-left.png";
import ArrowRight from "@/assets/img/arrow-right.png";
import team_play from "@/assets/img/team-act-play.svg";
import team_share from "@/assets/img/team-act-share.svg";
import downHandle from "@/assets/img/down-handle.png";
import line3 from "@/assets/img/line3.png";
import "./style.scss";

const Team: React.FC = () => {
  const settings = {
    infinite: false,
    autoplayspeed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  const sliderRef:any = useRef();

  return (
    <div className="team-wrapper">
      <div className="team-slider-wrapper">
        <TeamSlider />
      </div>
      <div className="team-content-rectangle"><img style={{ width: "25px" }} src={downHandle} /></div>
      <div className="team-content-wrapper">
        <div className="team-content-title">
          <img style={{ height: "1px" }} src={line3} />
          <div>
            <p style={{ fontSize: "22px" }}>WE, NCUHOMERS</p>
          </div>
          <img src={line3} />
        </div>
        <div className="team-content-actcard-left">
          <img src={team_play} />
          <div>
            To do <br />
            Things
          </div>
        </div>
        <div className="team-content-actcard-right">
          <div>
            <p>Share</p>
            <p>US</p>
          </div>
          <img src={team_share} />
        </div>
        <div className="team-content-rectangle"><img style={{ width: "25px" }} src={downHandle} /></div>
      </div>

      <div className="c-wrapper">
        <p style={{ marginTop: "-20px", marginLeft: "40px", fontSize: "40px", letterSpacing: "5px" }} >ACTIVITY</p>
        {/* <div className="c-content-act">
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
        </div> */}
        
          <img onClick={()=> sliderRef.current.slickPrev()} style={{width:"30px",marginLeft:"100px"}} src={ArrowLeft} />
          <img onClick={()=> sliderRef.current.slickNext()} style={{width:"30px",marginLeft:"60px"}} src={ArrowRight} />
        
      </div>
      <div className="team-footer-wrapper">
        <TeamFooter />
      </div>
    </div>
  );
};

export default Team;
