import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import welcome from "./pages/welcome";
import dashboard from "./pages/dashboard";
import courses from "./pages/courses";
import quiz from "./pages/quiz";
//import login2 from "./pages/login2";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={welcome} />
        <Route exact path="/login" component={welcome} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/courses" component={courses} />
        <Route exact path="/quiz" component={quiz} />
      </div>
    </Router>
  );
}

export default App;
