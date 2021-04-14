import About from "@/pages/detail/About";
import Blog from "@/pages/detail/Blog";
import Product from "@/pages/detail/Product";
import Team from "@/pages/detail/Team";
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../pages/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/register" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
