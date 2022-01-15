import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomeHeader from "@/components/header";

interface Props {
  router: {
    routes: any[];
  };
}

const Routes: React.FC<Props> = ({ router }) => {
  const location = useLocation();
  return (
    <>
      <HomeHeader />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            {router.routes.map((props, index) => (
              <Route key={index} {...props} />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Routes;
