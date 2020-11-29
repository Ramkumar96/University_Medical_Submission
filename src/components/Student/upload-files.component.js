import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadService from "../../services/upload-files.service";
import authHeader from "../../services/auth-header";
// import UploadService from "../../services/upload-files.service";
// import userService from "../../services/user.service";
import AuthService from "../../services/auth.service";

import CourseService from "../../services/course.service";
import DepartmentService from "../../services/department.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    // this.downloadFiles = this.downloadFiles.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],

      userid: "",
      date: "",
      category: "",
      courseId: "",
      departmentId: "",
      accepted: false,

      availableCourses: [],
      availableDepartments: [],
      currentUser: "",
      UserID: "",
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(response);
    });

    // Getting All Courses
    CourseService.getAllCourses().then(
      (response) => {
        this.setState({
          availableCourses: response.data,
        });
      },
      (error) => {
        this.setState({
          availableCourses:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );

    // Getting All Departments
    DepartmentService.getAllDepartments().then(
      (response) => {
        this.setState({
          availableDepartments: response.data,
        });
      },
      (error) => {
        this.setState({
          availableDepartments:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  onChangeUserId = (e) => {
    this.setState({
      userid: e.target.value,
    });
  };

  onChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onChangeCourseId = (e) => {
    this.setState({
      courseId: e.target.value,
    });
  };

  onChangeDepartmentId = (e) => {
    this.setState({
      departmentId: e.target.value,
    });
  };

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      currentFile: currentFile,
    });

    let formData = new FormData();

    let userid = this.state.userid;
    let date = this.state.date;
    let category = this.state.category;
    let courseId = this.state.courseId;
    let departmentId = this.state.departmentId;
    let accepted = this.state.accepted;

    formData.append("file", currentFile);
    formData.append("userid", userid);
    formData.append("date", date);
    formData.append("category", category);
    formData.append("courseId", courseId);
    formData.append("departmentId", departmentId);
    formData.append("accepted", accepted);

    UploadService.upload(formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });
    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const { selectedFiles, message , availableCourses } = this.state;
    const currentUser = AuthService.getCurrentUser();

    const courseList = availableCourses.filter(
      (availablecourse) => availablecourse.departmentId == this.state.departmentId
    );

    return (
      <div>
        <div className="col-md-12 portlets">
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="pull-left"> Add your Medical</div>
            </div>
            <div className="panel-body">
              <div className="padd">
                <div className="form quick-post">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="title">
                        UserID<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          placeholder={currentUser.userid}
                          type="text"
                          className="form-control"
                          id="userid"
                          value={this.state.userid}
                          onChange={this.onChangeUserId}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="title">
                        Date<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          className="form-control"
                          id="date"
                          value={this.state.date}
                          onChange={this.onChangeDate}
                        />
                      </div>
                    </div>

                    {/* Cateogry */}
                    <div className="form-group">
                      <label className="control-label col-lg-2">
                        Category<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <select
                          className="form-control"
                          value={this.state.category}
                          onChange={this.onChangeCategory}
                        >
                          <option value="">- Choose Cateogry -</option>
                          <option value="assignment">Assignment</option>
                          <option value="quiz">Quiz</option>
                          <option value="groupactivity">Group Activity</option>
                          <option value="finalexam">Final Exam</option>
                          <option value="midexam">Mid Exam</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">
                        Department<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <select
                          class="form-control input-sm m-bot15"
                          value={this.state.departmentId}
                          onChange={this.onChangeDepartmentId}
                        >
                          <option departmentId=""> Select Department </option>
                          {this.state.availableDepartments &&
                            this.state.availableDepartments.map(
                              (department, key) => (
                                <option
                                  key={key}
                                  value={department.departmentId}
                                >
                                  {department.departmentName}
                                </option>
                              )
                            )}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">
                        CourseID<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <select
                          class="form-control input-sm m-bot15"
                          value={this.state.courseId}
                          onChange={this.onChangeCourseId}
                        >
                          <option courseId=""> Select Course </option>
                          {courseList &&
                            courseList.map((course, key) => (
                              <option key={key} value={course.courseId}>
                                {course.courseName}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="tags">
                        Upload your Medical<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <label className="btn btn-default">
                          <input type="file" onChange={this.selectFile} />
                        </label>

                        <div className="alert alert-light" role="alert">
                          {message}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-offset-2 col-lg-9">
                        <button
                          className="btn btn-primary"
                          disabled={!selectedFiles}
                          onClick={this.upload}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="widget-foot">{/* Footer goes here */}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
