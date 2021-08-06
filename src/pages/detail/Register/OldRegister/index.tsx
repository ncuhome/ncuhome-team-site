import React, { useState, useRef } from "react";
import Header from "../../../Header";
import Slider from "react-slick";
import bg from "@/assets/img/reg-bg.svg";
import left from "@/assets/img/reg-left-handler.svg";
import right from "@/assets/img/reg-right-handler.svg";
import admini from "@/assets/img/admin.svg";
import product from "@/assets/img/product.svg";
import design from "@/assets/img/design.svg";
import research from "@/assets/img/research.svg";
import operation from "@/assets/img/operation.svg";
import "./style.scss"


const OldRegister = () => {
  const [groupInfo, setGroupInfo] = useState(["产品组", "一群产品组的人"]);
  const [groupDesc, setGroupDesc] = useState(["cp1", "cp2", "cp3"]);
  const windowWidth = window.outerWidth;

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    draggable: false,
    afterChange: (index: number) => {
      switch (index) {
        case 0:
          setGroupInfo(["产品组", "一群产品组的人"]);
          setGroupDesc(["cp1", "cp2", "cp3"]);
          break;
        case 1:
          setGroupInfo(["设计组", "一群设计组的人"]);
          setGroupDesc(["sj1", "sj2"]);
          break;
        case 2:
          setGroupInfo(["研发组", "一群敲代码的臭弟弟", "说话好听\n长得好看\n头发少者优先\n抗压能力强"]);
          setGroupDesc(["说话好听", "长得好看", "头发少者优先", "抗压能力强"]);
          break;
        case 3:
          setGroupInfo(["运营组", "一群运营组的人"]);
          setGroupDesc(["yy1", "yy2", "yy3"]);
          break;
        case 4:
          setGroupInfo(["行政组", "一群行政组的人"]);
          setGroupDesc(["xz1", "xz2", "xz3"]);
          break;
      }
    }
  };

  const settings1 = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 1,
    draggable: false,
    afterChange: (index: number) => {
      switch (index) {
        case 0:
          setGroupInfo(["产品组", "一群产品组的人"]);
          setGroupDesc(["cp1", "cp2", "cp3"]);
          break;
        case 1:
          setGroupInfo(["设计组", "一群设计组的人"]);
          setGroupDesc(["sj1", "sj2"]);
          break;
        case 2:
          setGroupInfo(["研发组", "一群敲代码的臭弟弟", "说话好听\n长得好看\n头发少者优先\n抗压能力强"]);
          setGroupDesc(["说话好听", "长得好看", "头发少者优先", "抗压能力强"]);
          break;
        case 3:
          setGroupInfo(["运营组", "一群运营组的人"]);
          setGroupDesc(["yy1", "yy2", "yy3"]);
          break;
        case 4:
          setGroupInfo(["行政组", "一群行政组的人"]);
          setGroupDesc(["xz1", "xz2", "xz3"]);
          break;
      }
    }
  };

  const sliderRef: any = useRef();

  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%,100%',
  }

  return (
    <div>
      <div className="reg-header">
        <Header />
      </div>
      {windowWidth > 767 ?
        (<div style={bgImage} className="background-div">
          <img style={{ width: "25px", marginTop: "10%" }} src={left} onClick={() => sliderRef.current.slickPrev()} />
          <div style={{ width: "80%" }}>
            <Slider ref={sliderRef} {...settings}>
              <div>
                <img className="reg-group-img" src={product} />
              </div>
              <div>
                <img className="reg-group-img" src={design} />
              </div>
              <div>
                <img className="reg-group-img" src={research} />
              </div>
              <div>
                <img className="reg-group-img" src={operation} />
              </div>
              <div>
                <img className="reg-group-img" src={admini} />
              </div>
            </Slider>
          </div>
          <img style={{ width: "25px", marginTop: "10%" }} src={right} onClick={() => sliderRef.current.slickNext()} />
        </div>)
        :
        (<div className="background-div">
          <div style={{ width: "80%" }}>
            <Slider ref={sliderRef} {...settings1}>
              <div>
                <img className="reg-group-img" src={product} />
              </div>
              <div>
                <img className="reg-group-img" src={design} />
              </div>
              <div>
                <img className="reg-group-img" src={research} />
              </div>
              <div>
                <img className="reg-group-img" src={operation} />
              </div>
              <div>
                <img className="reg-group-img" src={admini} />
              </div>
            </Slider>
          </div>
        </div>)}


      <div className="reg-group-info">
        <div className="reg-group-name">
          <h1 style={{ fontSize: "30px", marginTop: "-10px", letterSpacing: "5px" }}>{groupInfo[0]}</h1>
        </div>
        <div className="reg-group-desc">
          <p className="reg-group-desc-title" >{groupInfo[1]}</p>
          {groupDesc.map((desc) =>
            <p className="reg-group-desc-content">{desc}</p>
          )}
          <p className="reg-group-desc-footer" >请将简历及作品集投递至邮箱 <span style={{ color: "#629CFF" }}>hr@ncuhome.cn</span></p>
        </div>
      </div>
    </div>
  );
};

export default OldRegister;
