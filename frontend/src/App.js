import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
