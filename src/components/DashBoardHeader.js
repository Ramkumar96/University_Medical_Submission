import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Dashboardheader extends Component {
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

  logOut= () => {
    AuthService.logout();
  }

  render() {
    return (
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top darkblue ">
          <div className="container d-flex align-items-center">
              {/* SideBar toggle */}
            <div className="toggle-nav">
              <div
                className="icon-reorder tooltips"
                data-original-title="Toggle Navigation"
                data-placement="bottom"
              >
                <i className="icon_menu" />
              </div>
            </div>
            <h1 className="logo mr-auto">
              <a href="index.html">SUSL</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* .nav-menu */}
            <a href="/" className="get-started-btn scrollto" onClick={this.logOut}>
              Logout
            </a>
          </div>
        </header>
        {/* End Header */}
      </div>
    );
  }
}
