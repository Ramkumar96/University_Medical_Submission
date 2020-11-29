import React, { Component } from "react";
import Dashboardheader from "../components/DashBoardHeader";
import Dashboardsidebar from "../components/DashBoardSideBar";
import Hodmedicallist from "../components/Hod/HodMedicalList";

export default class Hoddashboard extends Component {
  render() {
    return (
      <>
        <Dashboardheader />
        <Dashboardsidebar/>

        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <Hodmedicallist />
          </section>
          {/*main content end*/}
        </section>
        {/* container section start */}
      </>
    );
  }
}
