import React, { Component } from 'react'

export default class Dashboardsidebar extends Component {

    render() {
        return (
           <div>
                 {/*sidebar start*/}
        <aside>
          <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
              <li className="active">
                <a className href="#">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sub-menu">
                <a className href="#">
                  <i className="icon_document_alt" />
                  <span>Profile</span>
                </a>
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
           </div>
        )
    }
}
