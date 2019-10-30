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
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
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
