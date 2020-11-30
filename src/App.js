import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Landingpage from "./Pages/LandingPage";
import Registerpage from "./Pages/RegisterPage";
import Loginpage from "./Pages/LoginPage";

import Admindashboard from "./Pages/AdminDashBoard";
import Studentdashboard from "./Pages/StudentDashBoard";
import Staffdashboard from "./Pages/StaffDashBoard";
import Lecturerdashboard from "./Pages/LecturerDashBoard";
import Hoddashboard from "./Pages/HodDashBoard";
import Deandashboard from "./Pages/DeanDashBoard";

class App extends Component {

  render() {
    
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/login" component={Loginpage} />
          <Route exact path="/register" component={Registerpage} />

          <Route exact path="/admindashboard" component={Admindashboard} />
          <Route exact path="/studentdashboard" component={Studentdashboard} />
          <Route exact path="/staffdashboard" component={Staffdashboard} />
          <Route exact path="/lecturerdashboard" component={Lecturerdashboard} />
          <Route exact path="/hoddashboard" component={Hoddashboard} />
          <Route exact path="/deandashboard" component={Deandashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
