import type { FC } from "react";
import Ncuhome from "./ncuhome";
import Products from "./products";
import Blog from "./blog";
import Team from "./team";
import About from "./about";
import IntroduceVideo from "./introduce_video";

const Parts: FC = () => (
  <>
    <IntroduceVideo height="100%" />
    <Ncuhome />
    <Products />
    <Blog />
    <Team />
    <About />
  </>
);

export default Parts;
