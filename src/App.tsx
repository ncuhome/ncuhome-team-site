import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { polyfill } from "seamless-scroll-polyfill";
import HomeHeader from "@/components/header";
import ga from "ga-lite";

interface Props {
  router: {
    routes: any[];
  };
}

const Routes: React.FC<Props> = ({ router }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      ga("create", "UA-80324378-25", "auto");
      ga('send', 'pageview');
    }

    polyfill();
  }, []);

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
