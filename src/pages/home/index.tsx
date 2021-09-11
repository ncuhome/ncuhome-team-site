import React, { Suspense, lazy } from "react";
import HorizontalScroll from "./components/HorizontalScroll";
import VideoPlayer from "./components/video-player";
import { useMedia } from "react-use";
import "./index.scss";

const HomeHeader = lazy(() => import("../Header"))
const Ncuhome = lazy(() => import("./Ncuhome"));
const Products = lazy(() => import("./ProductsCard"));
const Blog = lazy(() => import("./BlogCard"));
const Team = lazy(() => import("./TeamCard"));
const About = lazy(() => import("./AboutCard"));

const Pages: React.FC = () => {
  return (
    <>
      <VideoPlayer height="100%" />
      <Ncuhome />
      <Products />
      <Blog />
      <Team />
      <About />
    </>
  );
};

const Home: React.FC = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <>
      <Suspense fallback={''}>
        {isWide ? (
          <HorizontalScroll>
            <Pages />
          </HorizontalScroll>
        ) : (
          <Pages />
        )}
      </Suspense>
    </>
  );
};

export default Home;
