import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routesConfig from './config'
import HomeHeader from "@/pages/components/home_header";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <HomeHeader />
      <Switch>
        {
          routesConfig.map((props)=> (
            <Route {...props} />
          ))
        }
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
