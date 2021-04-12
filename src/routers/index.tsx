import About from "@/pages/detail/About";
import Blog from "@/pages/detail/Blog";
import Product from "@/pages/detail/Product";
import Team from "@/pages/detail/Team";
import Header from "@/pages/Header";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/product" component={Product} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/about/:id" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
