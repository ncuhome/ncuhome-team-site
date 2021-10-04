import React, {
  CSSProperties, ReactNode, useEffect, useState,
} from 'react';
import ScrollTrigger from '@terwanerik/scrolltrigger';
import incu from '@/assets/img/incu.png';
import incuExample from '@/assets/img/incu-example.png';
import ncov from '@/assets/img/ncov.png';
import ncovExample from '@/assets/img/ncov-example.png';
import ncuos from '@/assets/img/ncuos.png';
import ncuosExample from '@/assets/img/ncuos-example.png';
import us from '@/assets/img/us.png';
import usExample from '@/assets/img/us-example.png';
import android from '@/assets/img/android.png';
import apple from '@/assets/img/apple.png';
import game_1 from '@/assets/img/game-1.png';
import game_2 from '@/assets/img/game-2.png';
import game_3 from '@/assets/img/game-3.png';
import './style.scss';

interface GameData {
  gameImgSrc: string;
  gameName: string;
  gameDesc: string;
  gameBgColor: string;
}

interface Product {
  logo: string;
  logoWidth?: CSSProperties['width'];
  logoHeight?: CSSProperties['height'];
  description: ReactNode;
  example: string;
  exampleWidth?: CSSProperties['width'];
  exampleHeight?: CSSProperties['height'];
}

const gameData: GameData[] = [
  {
    gameImgSrc: game_1,
    gameName: '你的 2020 校园轨迹',
    gameDesc:
      '2019 年，那些或许被你忽视的，就会“砰”的涌现，月光下的足迹，教室里的身影，一些无意坚持下来的习惯。\n把它们收集起来，一起来拼出你的校园人设，惊喜在这里等你。',
    gameBgColor: '#141831',
  },
  {
    gameImgSrc: game_2,
    gameName: '听风',
    gameDesc:
      '用心听如风般的故事。看似波澜不惊的生活其实风起云涌，掺杂着甘甜苦楚。有时心酸，或许无处倾诉；有时喜悦，或许无人分享。而风一直未曾离开，它一直追随着我们。春风含着暖意，携着花的清芬，带着幸运、喜悦；秋风带着凌冽，藏着叶的苦涩，带着忧虑、难过。',
    gameBgColor: '#72AAB5',
  },
  {
    gameImgSrc: game_3,
    gameName: '拼图游戏',
    gameDesc: "多人在线协同拼图，Let's Pin",
    gameBgColor: '#2E2E2E',
  },
];

const productList: Product[] = [
  {
    logo: incu,
    logoWidth: '50%',
    description: (
      <>
        <p>习惯打卡，课表展示，空闲教室查询，寝室电量查询</p>
        <p>在复杂的大学生活里，一个南大家园 APP 就够了</p>
        <div className="description-incu-btn-container">
          <button
            onClick={() => window.open('https://incu-download.ncuos.com/iNCU_latest.apk')}
          >
            <img src={android} style={{ width: '20px', marginRight: '7px' }} />
            Android 下载
          </button>
          <button
            onClick={() => window.open(
              'https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561',
            )}
          >
            <img src={apple} style={{ width: '25px', marginRight: '7px' }} />
            App Store
          </button>
        </div>
      </>
    ),
    example: incuExample,
    exampleHeight: '100%',
    exampleWidth: '100%',
  },
  {
    logo: ncov,
    logoWidth: '40%',
    example: ncovExample,
    exampleWidth: '90%',
    description:
      '2020年3月1日，「香樟祺」应运而生并投入使用，透明公开实时跟进校园疫情数据。这份报告也成为疫情之下校园安全的保障，连接起息息相关的你我他，为大家带来安全感。',
  },
  {
    logo: ncuos,
    logoWidth: '40%',
    example: ncuosExample,
    exampleWidth: '56%',
    description: (
      <>
        <p>
          云家园是服务于南昌大学辅导员与本科生的一个信息服务平台，主要功能分为两大类：学生事务与信息查询。
        </p>
        <p>
          <span className="bold">学生事务: </span>
          离/返校登记、 学生证补(换)、 安全教育、 学长小教员（星火使者）、
          自助报到、 认定申请、 最美大学生投票、 新生入学教育、 错峰返校登记、
          信贷志愿者报名、 在读证明打印、 毕业生离校、 学生活动、 班导评价、
          辅导员评价、 ...
        </p>
        <p>
          <span className="bold">信息查询: </span>
          成绩查询、 班级通讯录、 违纪处分、 微信平台、 综合素质、 晚查房记录、
          寝室用电查询、 ...
        </p>
      </>
    ),
  },
  {
    logo: us,
    logoWidth: '40%',
    example: usExample,
    exampleWidth: '90%',
    description:
      ' US是专属于家园人的网络社区，为家园工作室的成员提供了一个互相交流的平台，内部人员可以通过论坛发帖的形式分享经验、交流心得，除此之外其中的一些办公功能也为日常工作提供了极大的便利。',
  },
];

const ProductBig: React.FC = () => {
  const [gameIndex, setGameIndex] = useState(0);

  const changeGame = () => {
    setGameIndex((pre) => (pre + 1) % gameData.length);
  };

  useEffect(() => {
    const trigger = new ScrollTrigger({
      trigger: {
        offset: {
          viewport: {
            x: 0,
            y: (_trigger: any, _frame: any, direction: any) => {
              switch (direction) {
                case 'top':
                  return 0.3;
                case 'bottom':
                  return 0.5;
                default:
                  return 0.5;
              }
            },
          },
        },
      },
    });
    trigger.add('[fade-in-up]');
  }, []);

  return (
    <div className="product-wrapper-b">
      {productList.map((product, index) => (
        <div className="product-content-wrapper" key={index}>
          <div className="product-content-left">
            <img
              src={product.logo}
              className="product-content-logo"
              style={{
                width: product.logoWidth,
                height: product.logoHeight,
              }}
            />
            <div className="product-content-description">
              {product.description}
            </div>
          </div>
          <div className="product-content-example-container" fade-in-up="">
            <img
              src={product.example}
              style={{
                objectFit: 'contain',
                width: product.exampleWidth,
                height: product.exampleHeight,
              }}
            />
          </div>
        </div>
      ))}

      {
      /*
       * 游戏产品展示部分，待优化
       */
      }
      {/* <div
        className="product-content-wrapper5-b"
        style={{ backgroundColor: gameData[gameIndex].gameBgColor }}
      >
        <div className="product-content-left-wrapper-b">
          <div className="product-content-gameTitle-b">Our games</div>
          <div className="product-content-gameName-b">
            {gameData[gameIndex].gameName}
          </div>
          <div className="product-content-description-b">
            {gameData[gameIndex].gameDesc}
          </div>
          <div onClick={changeGame} className="product-content-changeButton-b">
            换个看看
          </div>
        </div>
        <div className="product-content-example-container-b">
          <img src={gameData[gameIndex].gameImgSrc} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default ProductBig;
