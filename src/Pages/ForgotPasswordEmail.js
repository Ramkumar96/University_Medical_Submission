import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import resetPasswordService from "../services/resetPassword.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class ForgotPasswordEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
    email : "",
    loading: false,
    message: "",
    redirect:false,
    };
  }

//   onChangeEmail = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

  handleSendMail = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {

        let formData = new FormData();

        let email = this.state.email;

        formData.append("email", email);
      resetPasswordService.forgotpasswordsendmail(formData)
      .then(
        response => {
          console.log(response.message);
          this.setState({
            successful: true,
            loading: false,
            message: response.message
          });
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
            successful: false,
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
                    onSubmit={this.handleSendMail}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="login-wrap">
                      <div className="form-group">
                          <h5>We will send a reset password link to your email</h5>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input
                          type="email"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          onChange={e => this.setState({email: e.target.value})}
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
                          <span>Send</span>
                        </button>
                      </div>

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
