import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import UploadFiles from "../components/Student/upload-files.component";

export default class Studentdashboard extends Component {
  render() {
    return (
      <div>
        <Dashboardheader />
        <Dashboardsidebar />

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <UploadFiles />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
