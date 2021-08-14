import React, { ReactNode, useEffect, useState } from "react";
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
import ScrollTrigger from '@terwanerik/scrolltrigger'
import BoldButton from "@/pages/home/components/BoldButton";
import "./style.scss";

interface GameData {
  gameImgSrc: string;
  gameName: string;
  gameDesc: string;
  gameBgColor: string;
}

interface Product {
  logo: string,
  description: ReactNode;
  example: string;
  exampleWidth?: string | number;
  exampleHeight?: string | number;
}

const gameData: GameData[] = [
  {
    gameImgSrc: game_1,
    gameName: "你的2020校园轨迹",
    gameDesc: "2019年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。",
    gameBgColor: "#141831"
  },
  {
    gameImgSrc: game_2,
    gameName: "听风",
    gameDesc: "用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。",
    gameBgColor: "#72AAB5"
  },
  {
    gameImgSrc: game_3,
    gameName: "拼图游戏",
    gameDesc: "介绍",
    gameBgColor: "#2E2E2E"
  },
]

const productList: Product[] = [
  {
    logo: ncuhome,
    description: (
      <>
        <p>
          习惯打卡，课表展示，空闲教室查询，寝室电量查询
        </p>
        <p>
          在复杂的大学生活里，一个南大家园app就够了
        </p>
        <div className="description-incu-btn-container">
          <button onClick={() => window.open("https://incu-download.ncuos.com/iNCU_latest.apk")}>
            <img src={android} style={{ width: "20px", marginRight: "7px" }} />
            Android下载
          </button>
          <button onClick={() => window.open("https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561")}>
            <img src={apple} style={{ width: "25px", marginRight: "7px" }} />
            App Store
          </button>
        </div>
      </>
    ),
    example: ncuhomeExample,
    exampleHeight: "100%"
  },
  {
    logo: ncov,
    example: ncovExample,
    exampleWidth: "90%",
    description: (
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    )
  },
  {
    logo: ncuos,
    example: ncuosExample,
    exampleWidth: "56%",
    description: (
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    )
  },
  {
    logo: us,
    example: usExample,
    exampleWidth: "90%",
    description: (
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    )
  },
]

const ProductBig: React.FC = () => {
  const [gameIndex, setGameIndex] = useState(0);

  const changeGame = () => {
    setGameIndex(pre => (pre + 1) % (gameData.length));
  };

  useEffect(() => {
    const trigger = new ScrollTrigger({
      trigger: {
        offset: {
          viewport: {
            x: 0,
            y: (_trigger, _frame, direction) => {
              console.log({ direction });
              switch (direction) {
                case "top":
                  return 0.3;
                case "bottom":
                  return 0.5;
                default:
                  return 0.5;
              }
            }
          }
        }
      }
    });
    trigger.add('[fade-in-up]');
  }, []);

  return (
    <div className="product-wrapper-b">
      {
        productList.map((product) => (
          <div className="product-content-wrapper">
            <div className="product-content-left">
              <img className="product-content-logo" src={product.logo} />
              <div className="product-content-description">
                {product.description}
              </div>
            </div>
            <div className="product-content-example-container" fade-in-up="">
              <img
                src={product.example}
                className="product-content-example"
                style={{
                  width: product.exampleWidth,
                  height: product.exampleHeight
                }}
              />
            </div>
          </div>
        ))
      }

      <div className="product-content-wrapper5-b" style={{ "backgroundColor": gameData[gameIndex].gameBgColor }}>
        <div className="product-content-left-wrapper-b">
          <div className="product-content-gameTitle-b">Our games</div>
          <div className="product-content-gameName-b">{gameData[gameIndex].gameName}</div>
          <div className="product-content-description-b">
            <p>
              {gameData[gameIndex].gameDesc}
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
        <img className="product-content-example-b" src={gameData[gameIndex].gameImgSrc} alt="" />
      </div>
    </div>
  );
};

export default ProductBig;
