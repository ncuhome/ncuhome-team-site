import React, { Suspense, lazy } from "react";
import HorizontalScroll from "./components/HorizontalScroll";
import { useMedia } from "react-use";
import "./index.scss";

const Ncuhome = lazy(() => import("./Ncuhome"));
const Products = lazy(() => import("./Products"));
const Blog = lazy(() => import("./Blog"));
const Team = lazy(() => import("./Team"));
const About = lazy(() => import("./About"));

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

const Home = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
