import React, { lazy } from 'react';
import type { FC } from 'react';

const Ncuhome = lazy(() => import("./ncuhome"));
const Products = lazy(() => import("./products"));
const Blog = lazy(() => import("./blog"));
const Team = lazy(() => import("./team"));
const About = lazy(() => import("./about"));
const IntroduceVideo = lazy(() => import("./introduce_video"));

const Parts: FC = () => (
  <>
    <IntroduceVideo height="100%" />
    <Ncuhome />
    <Products />
    <Blog />
    <Team />
    <About />
  </>
)

export default Parts;
