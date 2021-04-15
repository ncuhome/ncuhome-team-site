import React from "react";
import ncuhome from "@/assets/img/ncuhome.png";
import ncuhomeExample from "@/assets/img/ncuhome-example.png";
import ncov from "@/assets/img/ncov.png";
import ncovExample from "@/assets/img/ncov-example.png";
import ncuos from "@/assets/img/ncuos.png";
import ncuosExample from "@/assets/img/ncuos-example.png";
import us from "@/assets/img/us.png";
import usExample from "@/assets/img/us-example.png";
import Header from "../../Header";
import BoldButton from "@/pages/home/components/BoldButton";
import "./style.scss";

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-header-wrapper">
        <Header />
      </div>
      <div className="product-content-wrapper1">
        <div className="product-content-left-wrapper">
          <img className="product-content-logo" src={ncuhome} alt="" />
          <div className="product-content-description">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
          <div className="product-content-button1">
            <BoldButton text="Android下载" bgColor="#FAFCFF" />
          </div>
          <div className="product-content-button2">
            <BoldButton text="App Store" bgColor="#FAFCFF" />
          </div>
        </div>
        <img className="product-content-example" src={ncuhomeExample} alt="" />
      </div>
      <div className="product-content-wrapper2">
        <div className="product-content-left-wrapper">
          <img
            className="product-content-logo"
            src={ncov}
            alt=""
          />
          <div className="product-content-description">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example" src={ncovExample} alt="" />
      </div>
      <div className="product-content-wrapper3">
        <div className="product-content-left-wrapper">
          <img className="product-content-logo" src={ncuos} alt="" />
          <div className="product-content-description">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example" src={ncuosExample} alt="" />
      </div>
      <div className="product-content-wrapper4">
        <div className="product-content-left-wrapper">
          <img className="product-content-logo" src={us} alt="" />
          <div className="product-content-description">
            <p>
              哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
            </p>
          </div>
        </div>
        <img className="product-content-example" src={usExample} alt="" />
      </div>
    </div>
  );
};

export default Product;
