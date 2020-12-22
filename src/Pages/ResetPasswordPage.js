import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import resetPasswordService from "../services/resetPassword.service";

import { Link} from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
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

// const checkPasswordMatch = (fieldConfirmPassword ) => {
//   if (fieldConfirmPassword.value != $("#password").val()) {
//       fieldConfirmPassword.setCustomValidity("Passwords do not match!");
//   } else {
//       fieldConfirmPassword.setCustomValidity("");
//   }
// }

export default class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      passwordMatch:true,
      successful: false,
      message: "",
      userReady: false,
    };
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // handleConfirmPassword = (e) => {
  //   if (e.onChangePassword !== e.handlePasswordChange) {
  //     this.setState({
  //       passwordMatch: false
  //     });
  //   }
  // };

  handleResetPassword = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {

      let formData = new FormData();
      let password = this.state.password;
      let token = this.props.match.params.token
      
      console.log(token);
      console.log(password);

      formData.append("password", password);
      formData.append("token", token);

      console.log(formData);

      resetPasswordService.resetPassword(formData)
      .then(
        (response) => {
          this.setState({
            message: response.message,
            successful: true,
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
                    onSubmit={this.handleResetPassword}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    {!this.state.successful && (
                      <div className="login-wrap">
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
                        {/* <div className="form-group">
                          <label htmlFor="password">Confirm Password</label>
                          <Input
                            type="password"
                            className="form-control"
                            name="confirmpassword"
                            // value={this.state.password}
                            onChange={this.handleConfirmPassword}
                            validations={[required, vpassword]}
                          />
                        </div> */}

                        <div className="form-group">
                          <button className="btn btn-primary btn-block">
                            Reset Password
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
