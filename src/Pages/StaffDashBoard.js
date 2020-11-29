import React, { Component } from "react";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import Staffmedicallist from "../components/Staff/StaffMedicalList";

export default class Staffdashboard extends Component {
  render() {
    return (
      <div>
        <Dashboardheader />
        <Dashboardsidebar />

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <Staffmedicallist />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
