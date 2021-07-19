import React, { Suspense, lazy } from "react";
import HorizontalScroll from "./components/HorizontalScroll";
import { useMedia } from "react-use";
import "./index.scss";

//const Loading = lazy(() => import("./components/Loading"));
const HomeHeader = lazy(() => import("./Ncuhome/HomeHeader"))
const Ncuhome = lazy(() => import("./Ncuhome"));
const Products = lazy(() => import("./ProductsCard"));
const Blog = lazy(() => import("./BlogCard"));
const Team = lazy(() => import("./TeamCard"));
const About = lazy(() => import("./AboutCard"));

const Pages: React.FC = () => {
  return (
    <>
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
        <div className="ncuhome-header">
          <HomeHeader />
        </div>
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
