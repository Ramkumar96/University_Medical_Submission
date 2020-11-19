import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      userReady: false,
      loginUserType: "",
    };
  }

  // componentDidMount() {
  //   const currentUser = AuthService.getCurrentUser();

  //   if (!currentUser) this.setState({ redirect: "/" });
  //   this.setState({
  //     currentUser: currentUser,
  //   });
  // }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        response => {
       

        // const currentUser = AuthService.getCurrentUser();

          // if (!currentUser) this.setState({ redirect: "/" });
          this.setState({
            loginUserType:response.roles[0],
            // currentUser: AuthService.getCurrentUser(),
            userReady: true,
          });
          console.log(response.roles)
          // window.location.reload();
        }
        ,
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    /**
     * @desc: Redirection pages willbe set according to usertypes
     */

    const { loginUserType } = this.state;

    if (this.state.userReady == true) {
      if (loginUserType === "ROLE_ADMIN") {
        return <Redirect to="/admindashboard" />;
      }
      if (loginUserType === "ROLE_USER") {
        return <Redirect to="/studentdashboard" />;
      }
      if (loginUserType === "ROLE_MODERATOR") {
        return <Redirect to="/staffdashboard" />;
      }
    }
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
                    onSubmit={this.handleLogin}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="login-wrap">
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          validations={[required]}
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
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-primary btn-block"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Login</span>
                        </button>
                      </div>

                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </div>
                  </Form>
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
