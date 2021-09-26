import React, { CSSProperties, ReactNode, useState } from "react";
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

interface GameData {
  gameName: string;
  gameDesc: string;
  gameBgSrc: object;
}

interface Product {
  logo: string,
  description: ReactNode;
  backgroundImg: CSSProperties;
}

const gameData: GameData[] = [
  {
    gameName: "你的 2021 校园轨迹",
    gameDesc: "2019 年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '120%,120%'
    }
  },
  {
    gameName: "听风",
    gameDesc: "用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '120%,120%'
    }
  },
  {
    gameName: "拼图游戏",
    gameDesc: "多人在线协同拼图，Let's Pin",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_3})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '120%,120%'
    }
  }
]

const productList: Product[] = [
  {
    logo: ncov_logo,
    description: (
      <>
        <h2>香樟祺</h2>
        <p>
          2020年3月1日，「香樟祺」应运而生并投入使用，透明公开实时跟进校园疫情数据。这份报告也成为疫情之下校园安全的保障，连接起息息相关的你我他，为大家带来安全感。
        </p>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${ncov_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200%,200%'
    }
  },
  {
    logo: ncuos_logo,
    description: (
      <>
        <h2>云家园</h2>
        <p>
          云家园是服务于南昌大学辅导员与本科生的一个信息服务平台，主要功能分为两大类：学生事务与信息查询。
        </p>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${ncuos_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200%,200%'
    }
  },
  {
    logo: us_logo,
    description: (
      <>
        <h2>US</h2>
        <p>
          US是专属于家园人的网络社区，为家园工作室的成员提供了一个互相交流的平台，内部人员可以通过论坛发帖的形式分享经验、交流心得，除此之外其中的一些办公功能也为日常工作提供了极大的便利。
        </p>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${us_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200%,200%'
    }
  }
]

const ProductSmall: React.FC = () => {
  const bgImage_ncuhome = {
    backgroundImage: `url(${ncuhome_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%,200%',
  }

  const [gameIndex, setGameIndex] = useState(0);

  const changeGame = () => {
    setGameIndex(pre => (pre + 1) % (gameData.length));
  };

  return (
    <>
      <div className="product-wrapper">
        <div style={bgImage_ncuhome} className="product-content-wrapper0">
          <img
            style={{ marginTop: "54px", width: "60%" }}
            src={ncuhome_logo}
            alt=""
          />
          <div className="product-content-description">
            <p>
              习惯打卡，课表展示，空闲教室查询，寝室电量查询
            </p>
            <p>
              在复杂的大学生活里，一个南大家园app就够了
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
      </div>

      <div className="product-wrapper">
        {
          productList.map((product) => (
            <div style={product.backgroundImg} className="product-content-wrapper">
              <img
                className="product-content-logo"
                src={product.logo}
                alt=""
              />
              <div className="product-content-description">
                {product.description}
              </div>
            </div>
          ))
        }
      </div>

      <div className="product-wrapper">
        <div style={gameData[gameIndex].gameBgSrc} className="product-content-wrapper5">
          <img className="product-content-logo" src={game_logo} alt='' />
          <div className="product-content-description">
            <h2>{gameData[gameIndex].gameName}</h2>
            <p>
              {gameData[gameIndex].gameDesc}
            </p>
          </div>

            <div
              onClick={changeGame}
              className="product-content-changeButton">
              换个看看
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductSmall;
