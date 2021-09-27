import React, { useState, useEffect} from 'react';
import ProductSmall from "./products_mobile";
import ProductBig from './products_pc';

const Product: React.FC = () => {
  const [isMobile,setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", onResize)
  },[])
  return (
    <div>
      {isMobile ?
        <ProductSmall/>
        :
        <ProductBig />
      }
    </div>
  )
}

export default Product;