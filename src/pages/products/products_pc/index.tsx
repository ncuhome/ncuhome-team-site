import React, { useState } from "react";
import { gameData, productList } from "../content";
import "./style.scss";

const ProductBig: React.FC = () => {
  const [gameIndex, setGameIndex] = useState(0);

  const changeGame = () => {
    setGameIndex((pre) => (pre + 1) % gameData.length);
  };

  return (
    <div className="product-wrapper-b">
      {productList.map((product, index) => (
        <div className="product-content-wrapper fade-in" key={index}>
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
          <div className="product-content-example-container">
            <img
              src={product.example}
              style={{
                objectFit: "contain",
                width: product.exampleWidth,
                height: product.exampleHeight,
              }}
            />
          </div>
        </div>
      ))}

      {/*
       * 游戏产品展示部分，待优化
       */}
      <div
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
      </div>
    </div>
  );
};

export default ProductBig;
