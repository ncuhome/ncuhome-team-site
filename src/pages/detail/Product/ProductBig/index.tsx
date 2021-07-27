import React, { useState } from "react";
import ncuhome from "@/assets/img/ncuhome.png";
import ncuhomeExample from "@/assets/img/ncuhome-example.png";
import ncov from "@/assets/img/ncov.png";
import ncovExample from "@/assets/img/ncov-example.png";
import ncuos from "@/assets/img/ncuos.png";
import ncuosExample from "@/assets/img/ncuos-example.png";
import us from "@/assets/img/us.png";
import usExample from "@/assets/img/us-example.png";
import android from "@/assets/img/android.png";
import apple from "@/assets/img/apple.png";
import game_1 from "@/assets/img/game-1.png";
import game_2 from "@/assets/img/game-2.png";
import game_3 from "@/assets/img/game-3.png"
import Header from "../../../Header";
import BoldButton from "@/pages/home/components/BoldButton";
import "./style.scss";


const ProductBig: React.FC = () => {

  const gameData_1 = {
    gameImgSrc: game_1,
    gameName: "你的2020校园轨迹",
    gameDesc: "2019年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。",
    gameBgColor: "#141831"
  }

  const gameData_2 = {
    gameImgSrc: game_2,
    gameName: "听风",
    gameDesc: "用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。",
    gameBgColor: "#72AAB5"
  }

  const gameData_3 = {
    gameImgSrc: game_3,
    gameName: "拼图游戏",
    gameDesc: "介绍",
    gameBgColor: "#2E2E2E"
  }

  const [gameData, setGameData] = useState(gameData_1)

  let changeGame = () => {

    if (gameData.gameName === gameData_1.gameName) {
      setGameData(gameData_2)
      return;
    } else if (gameData.gameName === gameData_2.gameName) {
      setGameData(gameData_3)
      return;
    } else {
      setGameData(gameData_1)
      return;
    }
  }

  return (
    <div className="product-wrapper-b">
      <div className="product-header-wrapper-b">
        <Header />
      </div>
      <div className="product-content-wrapper1-b">
        <div className="product-content-left-wrapper-b">
          <img className="product-content-logo-b" src={ncuhome} alt="" />
          <div className="product-content-description-b">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
          <div className="product-content-button1-b">
            <div className="product-bold-btn-b" onClick={()=> window.open("https://incu-download.ncuos.com/iNCU_latest.apk")}>
              <img src={android} style={{ width: "20px" }} />
              &nbsp;Android下载
            </div>
            {/* <BoldButton text="Android下载" bgColor="#FAFCFF" /> */}
          </div>
          <div className="product-content-button2-b">
            <div className="product-bold-btn-b" onClick={()=> window.open("https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561")}>
              <img src={apple} style={{ width: "25px" }} />
              &nbsp;App Store
            </div>
          </div>
        </div>
        <img className="product-content-example-b" src={ncuhomeExample} alt="" />
      </div>
      <div className="product-content-wrapper2-b">
        <div className="product-content-left-wrapper-b">
          <img
            className="product-content-logo-b"
            src={ncov}
            alt=""
          />
          <div className="product-content-description-b">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example-b" src={ncovExample} alt="" />
      </div>
      <div className="product-content-wrapper3-b">
        <div className="product-content-left-wrapper-b">
          <img className="product-content-logo-b" src={ncuos} alt="" />
          <div className="product-content-description-b">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example-b" src={ncuosExample} alt="" />
      </div>
      <div className="product-content-wrapper4-b">
        <div className="product-content-left-wrapper-b">
          <img className="product-content-logo-b" src={us} alt="" />
          <div className="product-content-description-b">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example-b" src={usExample} alt="" />
      </div>

      <div className="product-content-wrapper5-b" style={{ "backgroundColor": gameData.gameBgColor }}>
        <div className="product-content-left-wrapper-b">
          <div className="product-content-gameTitle-b">Our games</div>
          <div className="product-content-gameName-b">{gameData.gameName}</div>
          <div className="product-content-description-b">
            <p>
              {gameData.gameDesc}
            </p>
          </div>
          <div className="product-content-buttonArea-b">
            <div
              onClick={changeGame}
              className="product-content-changeButton-b">
              换个看看
            </div>
          </div>
        </div>
        <img className="product-content-example-b" src={gameData.gameImgSrc} alt="" />
      </div>
    </div>
  );
};

export default ProductBig;
