/* global gapi */
import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Courses from "./components/courses";

// const responseGoogle = response => {
//   console.log(response);
// };

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={"single_host_origin"}
//   />,
//   document.getElementById("googleButton")
// );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false
    };
  }

  //client id: 906557148812-t37m6os1ima7kci2a80jscvfj603c3em.apps.googleusercontent.com
  //client secret: UfHEMY8R54m7-W87heHGSisk
  componentDidMount() {
    const successCallback = this.onSuccess.bind(this);

    window.gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "906557148812-t37m6os1ima7kci2a80jscvfj603c3em.apps.googleusercontent.com"
      });

      // this.auth2.attachClickHandler(document.querySelector('#loginButton'), {}, this.onLoginSuccessful.bind(this))

      this.auth2.then(() => {
        console.log("on init");
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get()
        });
      });
    });

    window.gapi.load("signin2", function() {
      // Method 3: render a sign in button
      // using this method will show Signed In if the user is already signed in
      var opts = {
        width: 200,
        height: 50,
        client_id:
          "906557148812-t37m6os1ima7kci2a80jscvfj603c3em.apps.googleusercontent.com",
        onSuccess: successCallback
      };
      gapi.signin2.render("loginButton", opts);
    });
  }

  onSuccess() {
    console.log("on success");
    this.setState({
      isSignedIn: true,
      err: null
    });
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err
    });
  }

  getContent() {
    if (this.state.isSignedIn) {
      return <p>hello, you're signed in</p>;
    } else {
      return (
        <div>
          <h3>Click here to sign in</h3>
          <button id="loginButton"></button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Learning Bug</h1>
        </header>
        <p className="App-intro">
          <h2>Let's Learn Science the Easy Way</h2>
          <a href="/auth/google" class="button">
            <div>
              <span class="svgIcon t-popup-svg">
                <svg
                  class="svgIcon-use"
                  width="25"
                  height="37"
                  viewBox="0 0 25 25"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                      fill="#34A853"
                    />
                    <path
                      d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                      fill="#EA4335"
                    />
                  </g>
                </svg>
              </span>
              <span class="button-label">Sign in with Google</span>
            </div>
          </a>
        </p>
      </div>
    );
  }
}

export default App;
