import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routesConfig from './config'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
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
