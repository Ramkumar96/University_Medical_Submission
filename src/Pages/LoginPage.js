import React, { Component } from "react";

export default class Loginpage extends Component {
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
      <div className="login-img3-body">

            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center ">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="container">
            <form className="login-form" action="index.html">
              <div className="login-wrap">
                <p className="login-img">
                  <i className="icon_lock_alt" />
                </p>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="icon_profile" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    autofocus
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="icon_key_alt" />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <label className="checkbox">
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                  <span className="pull-right">
                    {" "}
                    <a href="#"> Forgot Password?</a>
                  </span>
                </label>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
                  
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <img
                    src="assets/img/hero-img.png"
                    className="img-fluid animated"
                    alt
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Hero */}
       
      </div>
    );
  }
}
