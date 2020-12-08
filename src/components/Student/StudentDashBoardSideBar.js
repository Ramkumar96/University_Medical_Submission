import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";

export default class Studentdashboardsidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };

  render() {
    return (
      <div>
        <HashRouter>
          {/*sidebar start*/}
          <aside>
            <div id="sidebar" className="nav-collapse ">
              {/* sidebar menu start*/}
              <ul className="sidebar-menu">
                <li className="active">
                  <NavLink to="/">
                    <i className="icon_house_alt" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="sub-menu">
                  <NavLink to="/studentprofile">
                  <i class="fa fa-bell fa-2x"> </i>
                    Notification
                  </NavLink>
                </li>
                <li className="sub-menu">
                  <a className href="#">
                    <i className="icon_document_alt" />
                    <span>Departments</span>
                  </a>
                </li>
                <li>
                  <a className href="#">
                    <i className="icon_genius" />
                    <span>News & Updates</span>
                  </a>
                </li>
                <li>
                  <a className href="#">
                    <i className="icon_documents_alt" />
                    <span>Upcoming Events</span>
                  </a>
                </li>
                <li>
                  <a className href="#">
                    <i className="icon_table" />
                    <span>Calendar</span>
                  </a>
                </li>
              </ul>
              {/* sidebar menu end*/}
            </div>
          </aside>
          {/*sidebar end*/}
        </HashRouter>
      </div>
    );
  }
}
