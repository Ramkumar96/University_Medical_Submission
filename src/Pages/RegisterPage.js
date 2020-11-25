import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Registerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      userReady: false,
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
            userReady: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  };

  render() {
    // if (this.state.userReady == true) {
    //     return <Redirect to="/" />;
    // }

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
                  <Form
                    className="login-form"
                    onSubmit={this.handleRegister}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    {!this.state.successful && (
                      <div className="login-wrap">
                        {/* <p className="login-img">
                          <i className="icon_lock_alt" />
                        </p> */}
                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            validations={[required, vusername]}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            validations={[required, email]}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            validations={[required, vpassword]}
                          />
                        </div>

                        <div className="form-group">
                          <button className="btn btn-primary btn-block">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    )}

                    {this.state.message && (
                      <div className="form-group">
                        <div
                          className={
                            this.state.successful
                              ? "alert alert-success"
                              : "alert alert-danger"
                          }
                          role="alert"
                        >
                          {this.state.message}
                        </div>
                        <Link
                            to="/login"
                            className="btn-get-started scrollto"
                          >
                            Login
                          </Link>
                      </div>
                    )}
                    <CheckButton
                      style={{ display: "none" }}
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    />
                  </Form>

                  {/* <form className="login-form" action="index.html">
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
            Register
          </button>
        </div>
      </form> */}
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img
                  src="assets/img/why-us.png"
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
