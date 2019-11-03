import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dashboard from "./pages/dashboard";
import Modules from './pages/Modules';
import Quizes from './pages/Quizes';

import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/Admin";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
     
      <Route exact path="/modules" component={Modules} />
        <Route exact path="/quiz" component={Quizes} />
      <Route exact path="/dashboard" component={dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
