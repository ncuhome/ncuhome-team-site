import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact>
            <Home />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
