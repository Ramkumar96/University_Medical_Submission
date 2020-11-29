import React, { Component } from "react";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import Lecturermedicallist from "../components/Lecturer/LecturerMedicalList";

export default class Lecturerdashboard extends Component {
  render() {
    return (
      <div>
        <Dashboardheader />
        <Dashboardsidebar />

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <Lecturermedicallist />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
