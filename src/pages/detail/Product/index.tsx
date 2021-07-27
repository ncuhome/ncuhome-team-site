import React, { useState } from 'react';
import ProductSmall from "./ProductSmall";
import ProductBig from './ProductBig';

const Product: React.FC = () => {
  let windowWidth = window.outerWidth;
  return (
    <div>
      {windowWidth < 768 ?
        <ProductSmall/>
        :
        <ProductBig />
      }
    </div>
  )
}

export default Product;