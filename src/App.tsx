import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeHeader from "@/components/header";

interface Props {
  router: {
    routes: any[];
  };
}

const Routes: React.FC<Props> = ({ router }) => (
  <>
    <HomeHeader />
    <Switch>
      {router.routes.map((props, index) => (
        <Route key={String(new Date()) + index} {...props} />
      ))}
    </Switch>
  </>
);

export default Routes;
