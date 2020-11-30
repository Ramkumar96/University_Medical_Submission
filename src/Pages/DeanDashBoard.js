import React, { Component } from "react";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import Deanmedicallist from "../components/Dean/DeanMedicalList";

export default class Deandashboard extends Component {

  render() {
    return (
      <div>
        <Dashboardheader />
        <Dashboardsidebar />

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <Deanmedicallist />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </div>
    );
  }
}
