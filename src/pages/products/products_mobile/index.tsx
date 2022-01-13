import React from "react";
import ncuhome_logo from "@/assets/img/ncuhome-logo.svg";
import ncuhome_bg from "@/assets/img/ncuhome-bg.svg";
import android from "@/assets/img/android.png";
import apple from "@/assets/img/apple.png";
import { productList } from "../content";
import "./style.scss";

const bgImage_ncuhome = {
  backgroundImage: `url(${ncuhome_bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "200%,200%",
};

const ProductSmall: React.FC = () => {
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
            <p>习惯打卡，课表展示，空闲教室查询，寝室电量查询……</p>
            <p>在复杂的大学生活里，一个南大家园app就够了。</p>
          </div>
          <div className="product-content-button">
            <div
              className="product-bold-btn"
              onClick={() =>
                window.open("https://incu-download.ncuos.com/iNCU_latest.apk")
              }
            >
              <img src={android} style={{ width: "20px" }} />
              &nbsp;Android下载
            </div>
            <div
              className="product-bold-btn"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561"
                )
              }
            >
              <img src={apple} style={{ width: "25px" }} />
              &nbsp;App Store
            </div>
          </div>
        </div>
      </div>

      <div className="product-wrapper">
        {productList.slice(1).map((product, index) => (
          <div
            style={product.backgroundImg}
            key={index}
            className="product-content-wrapper"
          >
            <img
              className="product-content-logo"
              src={product.logoMobile}
              alt=""
            />
            <div className="product-content-description">
              {product.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSmall;
