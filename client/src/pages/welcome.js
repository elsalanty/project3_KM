/* global gapi */
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";
import "../App.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    let postData;
    if (type === "google" && res.w3.U3) {
    }

    PostData("signup", postData).then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirectToReferrer: true });
      }
    });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }

    const responseGoogle = response => {
      console.log(response);
      this.signup(response, "google");
    };

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

export default Welcome;
