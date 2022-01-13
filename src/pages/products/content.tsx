/**
 * 产品页面的文字内容
 */
import type { CSSProperties, ReactNode } from "react";
import game_1 from "@/assets/img/game-1.png";
import game_2 from "@/assets/img/game-2.png";
import game_3 from "@/assets/img/game-3.png";
import ncuos from "@/assets/img/ncuos.png";
import ncuosExample from "@/assets/img/ncuos-example.png";
import us from "@/assets/img/us.png";
import usExample from "@/assets/img/us-example.png";
import android from "@/assets/img/android.png";
import apple from "@/assets/img/apple.png";
import incu from "@/assets/img/incu.png";
import incuExample from "@/assets/img/incu-example.png";
import ncov from "@/assets/img/ncov.png";
import ncovExample from "@/assets/img/ncov-example.png";
import game_bg_1 from "@/assets/img/game-bg-1.svg";
import game_bg_2 from "@/assets/img/game-bg-2.svg";
import game_bg_3 from "@/assets/img/game-bg-3.svg";

import ncuhome_logo from "@/assets/img/ncuhome-logo.svg";
import ncuhome_bg from "@/assets/img/ncuhome-bg.svg";
import ncov_bg from "@/assets/img/ncov-bg.svg";
import ncov_logo from "@/assets/img/ncov-logo.svg";
import ncuos_logo from "@/assets/img/ncuos-logo.svg";
import ncuos_bg from "@/assets/img/ncuos-bg.svg";
import us_bg from "@/assets/img/us-bg.svg";
import us_logo from "@/assets/img/us-logo.svg";

interface GameData {
  gameImgSrc: string;
  gameName: string;
  gameDesc: string;
  gameBgColor: string;
  gameBgSrc: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
  };
}

interface Product {
  logo: string;
  logoMobile: string;
  logoWidth?: CSSProperties["width"];
  logoHeight?: CSSProperties["height"];
  description: ReactNode;
  example: string;
  exampleWidth?: CSSProperties["width"];
  exampleHeight?: CSSProperties["height"];
  backgroundImg: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
  };
}

export const gameData: GameData[] = [
  {
    gameImgSrc: game_1,
    gameName: "你的 2020 校园轨迹",
    gameDesc:
      "2019 年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。",
    gameBgColor: "#141831",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "120%,120%",
    },
  },
  {
    gameImgSrc: game_2,
    gameName: "听风",
    gameDesc:
      "用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。",
    gameBgColor: "#72AAB5",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_2})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "120%,120%",
    },
  },
  {
    gameImgSrc: game_3,
    gameName: "拼图游戏",
    gameDesc:
      "多人在线协同拼图，Let's Pin，一个人的拼图可能考验的是纯粹的智慧，而多个人的拼图需要足够的沟通与默契，让你的拼图更有趣！",
    gameBgColor: "#2E2E2E",
    gameBgSrc: {
      backgroundImage: `url(${game_bg_3})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "120%,120%",
    },
  },
];

export const productList: Product[] = [
  {
    logo: incu,
    logoMobile: ncuhome_logo,
    logoWidth: "50%",
    description: (
      <>
        <p>习惯打卡，课表展示，空闲教室查询，寝室电量查询……</p>
        <p>在复杂的大学生活里，一个南大家园 APP 就够了。</p>
        <div className="description-incu-btn-container">
          <button
            onClick={() =>
              window.open("https://incu-download.ncuos.com/iNCU_latest.apk")
            }
          >
            <img src={android} style={{ width: "20px", marginRight: "7px" }} />
            Android 下载
          </button>
          <button
            onClick={() =>
              window.open(
                "https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561"
              )
            }
          >
            <img src={apple} style={{ width: "25px", marginRight: "7px" }} />
            App Store
          </button>
        </div>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${ncuhome_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%,200%",
    },
    example: incuExample,
    exampleHeight: "100%",
    exampleWidth: "100%",
  },
  {
    logo: ncov,
    logoMobile: ncov_logo,
    logoWidth: "40%",
    example: ncovExample,
    exampleWidth: "90%",
    description:
      "2020年3月1日，「香樟祺」应运而生并投入使用，透明公开实时跟进校园疫情数据。这份报告也成为疫情之下校园安全的保障，连接起息息相关的你我他，为大家带来安全感。",
    backgroundImg: {
      backgroundImage: `url(${ncov_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%,200%",
    },
  },
  {
    logo: ncuos,
    logoMobile: ncuos_logo,
    logoWidth: "40%",
    example: ncuosExample,
    exampleWidth: "56%",
    description: (
      <>
        <p>
          “云家园”信息化服务平台是由家园工作室设计并开发，于2016年正式上线，“云家园”信息服务平台面向的用户有学工委办、学工处老师、辅导员及全校在校本科生。
        </p>
        <p>
          主要功能模块包括：离/返校登记、在读证明打印、成绩查询、班级通讯录、寝室用电查询、综合素质、贫困生认定等。
        </p>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${ncuos_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%,200%",
    },
  },
  {
    logo: us,
    logoMobile: us_logo,
    logoWidth: "40%",
    example: usExample,
    exampleWidth: "90%",
    description: (
      <>
        <p>
          US是专属于家园人的网络社区，为家园工作室的成员提供了一个互相交流的平台。
        </p>
        <p>
          内部人员可以通过论坛发帖的形式分享经验、交流心得，其中的办公功能也为日常工作提供了极大的便利。
        </p>
      </>
    ),
    backgroundImg: {
      backgroundImage: `url(${us_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%,200%",
    },
  },
];
