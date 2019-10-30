import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./components/dashboard"

import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
