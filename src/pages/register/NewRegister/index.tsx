import React from "react";
import Header from "@/pages/components/header";
import Slider from "react-slick";
import admini from "@/assets/img/admini.png";
import product from "@/assets/img/product.png";
import design from "@/assets/img/design.png";
import research from "@/assets/img/research.png";
import operation from "@/assets/img/operation.png";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 3,
  speed: 500,
};

const NewRegister = () => {
  return (
    <div>
      <Header />
      <div>
        <Slider {...settings}>
          <div>
            <img src={admini} />
          </div>
          <div>
            <img src={product} />
          </div>
          <div>
            <img src={design} />
          </div>
          <div>
            <img src={research} />
          </div>
          <div>
            <img src={operation} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NewRegister;
