import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/auth.service";

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

export default class Adduser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      userRole: "",
      userName: null ,
      password: null,
      successful: false,
      message: "",
    };
  }

  onChangeuserId = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  onChangefirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onChangelastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangemobile = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };
  onChangeaddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  onChangeuserRole = (e) => {
    this.setState({
      userRole: e.target.value,
    });
  };

  handleRegister=(e)=> {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });


    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      
    console.log(
      this.state.userId, 
      this.state.firstName, 
      this.state.lastName,
      this.state.email,
      this.state.mobile,
      this.state.address,
      this.state.userRole,
      this.state.userName,
      this.state.password,
      );
      // AuthService.register(
      //   this.state.username,
      //   this.state.email,
      //   this.state.password
      // ).then(
      //   (response) => {
      //     this.setState({
      //       message: response.data.message,
      //       successful: true,
      //     });
      //   },
      //   (error) => {
      //     const resMessage =
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //       error.message ||
      //       error.toString();

      //     this.setState({
      //       successful: false,
      //       message: resMessage,
      //     });
      //   }
      // );
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              <i className="fa fa-files-o" />
              Add New Users
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">Add new users</header>
              <div className="panel-body">
                <div className="form">
                  <Form
                    className="form-validate form-horizontal "
                    onSubmit={this.handleRegister}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    {!this.state.successful && (
                      <div>
                        <div className="form-group ">
                          <label
                            htmlFor="userid"
                            className="control-label col-lg-2"
                          >
                            User ID<span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="userid"
                              value={this.state.userId}
                              onChange={this.onChangeuserId}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="firstname"
                            className="control-label col-lg-2"
                          >
                            First name <span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="firstname"
                              value={this.state.firstName}
                              onChange={this.onChangefirstName}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="lastname"
                            className="control-label col-lg-2"
                          >
                            Last name <span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="lastname"
                              value={this.state.lastName}
                              onChange={this.onChangelastName}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="email"
                            className="control-label col-lg-2"
                          >
                            Email <span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[required, email]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="mobile"
                            className="control-label col-lg-2"
                          >
                            Mobile <span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="mobile"
                              value={this.state.mobile}
                              onChange={this.onChangemobile}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="address"
                            className="control-label col-lg-2"
                          >
                            Address <span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <Input
                              type="text"
                              className="form-control"
                              name="address"
                              value={this.state.address}
                              onChange={this.onChangeaddress}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label
                            htmlFor="userid"
                            className="control-label col-lg-2"
                          >
                            User Role<span className="required">*</span>
                          </label>
                          <div className="col-lg-10">
                            <select
                              class="form-control input-sm m-bot15"
                              value={this.state.userRole}
                              onChange={this.onChangeuserRole}
                            >
                              <option defaultValue> Select user Role </option>
                              <option userrole="student">Student</option>
                              <option userrole="staff">Staff</option>
                              <option userrole="lecturer">Lecturer</option>
                              <option userrole="hod">HOD</option>
                              <option userrole="dean">Dean</option>
                              <option userrole="admin">Admin</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-lg-offset-2 col-lg-10">
                            <button
                              className="btn btn-primary btn-block"
                            >
                              Save
                            </button>
                          </div>
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
            </section>
          </div>
        </div>
      </div>
    );
  }
}
