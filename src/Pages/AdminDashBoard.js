import React, { Component } from "react";
import Adduser from "../components/Admin/AddUser";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import CourseService from "../services/course.service";

export default class Admindashboard extends Component {
  render() {
    return (
      <div>
        <Dashboardheader />
        <Dashboardsidebar />
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <Adduser />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
