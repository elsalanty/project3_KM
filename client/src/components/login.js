import React, { component, Component } from "react";
import GoogleLogin from "react-google-login";
import "./App.css";

class Welcome extends Component {
  render() {
    return (
      <div className="row" id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Let's Learn Science The Easy Way</h2>
          <GoogleLogin
            clientId="906557148812-t37m6os1ima7kci2a80jscvfj603c3em.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}
