import React from "react";
import ProductSmall from "./products_mobile";
import ProductBig from "./products_pc";
import useIsMobile from "@/hooks/useIsMobile";

const Product: React.FC = () => {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <ProductSmall /> : <ProductBig />}</div>;
};

export default Product;
