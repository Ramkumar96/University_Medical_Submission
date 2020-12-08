import { Switch, Route ,HashRouter } from "react-router-dom";
import React, { Component } from "react";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import Studentprofile from "../components/Student/StudentProfile";
import UploadFiles from "../components/Student/upload-files.component";
import Studentdashboardsidebar from "../components/Student/StudentDashBoardSideBar";

export default class Studentdashboard extends Component {
  render() {
    return (
      <div>
        <Dashboardheader />
        <Studentdashboardsidebar/>

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
          {/* <UploadFiles /> */}
            <HashRouter>
            <Route exact path="/" component={UploadFiles} />  
            <Route exact path="/studentprofile" component={Studentprofile} />
            </HashRouter>
            {/* <UploadFiles />
            <Studentprofile/> */}
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
