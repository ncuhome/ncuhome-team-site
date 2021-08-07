import React, { useState } from "react";
import ncuhome_logo from "@/assets/img/ncuhome-logo.svg"
import ncuhome_bg from "@/assets/img/ncuhome-bg.svg";
import ncov_bg from "@/assets/img/ncov-bg.svg";
import ncov_logo from "@/assets/img/ncov-logo.svg"
import ncuos_logo from "@/assets/img/ncuos-logo.svg";
import ncuos_bg from "@/assets/img/ncuos-bg.svg";
import us_bg from "@/assets/img/us-bg.svg";
import us_logo from "@/assets/img/us-logo.svg";
import android from "@/assets/img/android.png";
import apple from "@/assets/img/apple.png";
import game_logo from "@/assets/img/game-logo.svg";
import game_bg_1 from "@/assets/img/game-bg-1.svg";
import game_bg_2 from "@/assets/img/game-bg-2.svg";
import game_bg_3 from "@/assets/img/game-bg-3.svg";
import "./style.scss";


const ProductSmall: React.FC = () => {

  const bgImage_ncuhome = {
    backgroundImage: `url(${ncuhome_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%,200%',
  }

  const bgImage_ncov = {
    backgroundImage: `url(${ncov_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%,200%'
  }

  const bgImage_ncuos = {
    backgroundImage: `url(${ncuos_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%,200%'
  }

  const bgImage_us = {
    backgroundImage: `url(${us_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%,200%'
  }

  const gameData_1 = {
    gameName: "你的2021校园轨迹",
    gameDesc: "2019年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%,100%'
    }
  }

  const gameData_2 = {
    gameName: "听风",
    gameDesc: "用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%,100%'
    }
  }

  const gameData_3 = {
    gameName: "拼图游戏",
    gameDesc: "介绍",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_3})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%,100%'
    }
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
    <div className="product-wrapper">
      <div style={bgImage_ncuhome} className="product-content-wrapper1">
        <img
          className="product-content-logo"
          src={ncuhome_logo}
          alt=""
        />
        <div className="product-content-description">
          <p>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </p>
        </div>
        <div className="product-content-button">
          <div className="product-bold-btn" onClick={() => window.open("https://incu-download.ncuos.com/iNCU_latest.apk")}>
            <img src={android} style={{ width: "20px" }} />
            &nbsp;Android下载
          </div>
          <div className="product-bold-btn" onClick={() => window.open("https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561")}>
            <img src={apple} style={{ width: "25px" }} />
            &nbsp;App Store
          </div>
        </div>
      </div>

      <div style={bgImage_ncov} className="product-content-wrapper2">
        <img
          className="product-content-logo"
          src={ncov_logo}
          alt=""
        />
        <div className="product-content-description">
          <h2>香樟祺</h2>
          <p>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </p>
        </div>
      </div>

      <div style={bgImage_ncuos} className="product-content-wrapper3">
        <img className="product-content-logo"
          src={ncuos_logo}
          alt=""
        />
        <div className="product-content-description">
          <h2>云家园</h2>
          <p>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </p>
        </div>
      </div>

      <div style={bgImage_us} className="product-content-wrapper4">
        <img className="product-content-logo" src={us_logo} alt="" />
        <div className="product-content-description">
          <h2>US</h2>
          <p>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </p>
        </div>
      </div>

      <div style={gameData.gameBgSrc} className="product-content-wrapper5">
        <img className="product-content-logo" src={game_logo} alt='' />
        <div className="product-content-description">
          <h2>{gameData.gameName}</h2>
          <p>
            {gameData.gameDesc}
          </p>
        </div>
        <div className="product-content-buttonArea">
          <div
            onClick={changeGame}
            className="product-content-changeButton">
            换个看看
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmall;
