import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

import UploadService from "../../services/upload-files.service";
import AuthService from "../../services/auth.service";
import CourseService from "../../services/course.service";
import DepartmentService from "../../services/department.service";

const nodes = [
  {
    value: "finalexam",
    label: "Final Exam",
  },
  {
    value: "midexam",
    label: "Mid Exam",
  },
  {
    value: "quiz",
    label: "Quiz",
    children: [
      { value: "quiz1", label: "Quiz-01" },
      { value: "quiz2", label: "Quiz-02" },
      { value: "quiz3", label: "Quiz-03" },
      { value: "quiz4", label: "Quiz-04" },
      { value: "quiz5", label: "Quiz-05" },
      { value: "quiz6", label: "Quiz-06" },
    ],
  },
  {
    value: "assignment",
    label: "Assignment",
    children: [
      { value: "assignment1", label: "Assignment-01" },
      { value: "assignment2", label: "Assignment-02" },
      { value: "assignment3", label: "Assignment-03" },
      { value: "assignment4", label: "Assignment-04" },
      { value: "assignment5", label: "Assignment-05" },
      { value: "assignment6", label: "Assignment-06" },
    ],
  },
  {
    value: "groupactivity",
    label: "Group Activity",
    children: [
      { value: "groupactivity1", label: "Group Activity-01" },
      { value: "groupactivity2", label: "Group Activity-02" },
      { value: "groupactivity3", label: "Group Activity-03" },
      { value: "groupactivity4", label: "Group Activity-04" },
      { value: "groupactivity5", label: "Group Activity-05" },
      { value: "groupactivity6", label: "Group Activity-06" },
    ],
  },
  {
    value: "attentence",
    label: "Attentence",
    children: [
      { value: "attentence1", label: "Attentence-01" },
      { value: "attentence2", label: "Attentence-02" },
      { value: "attentence3", label: "Attentence-03" },
      { value: "attentence4", label: "Attentence-04" },
      { value: "attentence5", label: "Attentence-05" },
      { value: "attentence6", label: "Attentence-06" },
      { value: "attentence7", label: "Attentence-07" },
      { value: "attentence8", label: "Attentence-08" },
      { value: "attentence9", label: "Attentence-09" },
      { value: "attentence10", label: "Attentence-10" },
    ],
  },
];

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

      acceptedByStaff: false,
      deletedByStaff: false,
      acceptedByLecturer: false,
      deletedByLecturer: false,

      availableCourses: [],
      availableDepartments: [],
      currentUser: "",
      UserID: "",

      checked: [],
      expanded: [],

      startDate: "",
      endDate: "",
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

  // onChangeCategory = (e) => {
  //   this.setState({
  //     category: e.target.value,
  //   });
  // };

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
    let SDate = this.state.startDate;
    let startedDate =
      SDate.getDate() + "/" + SDate.getMonth() + "/" + SDate.getFullYear();
    let EDate = this.state.endDate;
    let endDate =
      EDate.getDate() + "/" + EDate.getMonth() + "/" + EDate.getFullYear();
    let date = startedDate + "-" + endDate;
    // let category = this.state.category;
    let category = this.state.checked;
    let courseId = this.state.courseId;
    let departmentId = this.state.departmentId;
    // let accepted = this.state.accepted;
    let acceptedByStaff = this.state.acceptedByStaff;
    let deletedByStaff = this.state.deletedByStaff;
    let acceptedByLecturer = this.state.acceptedByLecturer;
    let deletedByLecturer = this.state.deletedByLecturer;

    formData.append("file", currentFile);
    formData.append("userid", userid);
    formData.append("date", date);
    formData.append("category", category);
    formData.append("courseId", courseId);
    formData.append("departmentId", departmentId);
    formData.append("acceptedByStaff", acceptedByStaff);
    formData.append("deletedByStaff", deletedByStaff);
    formData.append("acceptedByLecturer", acceptedByLecturer);
    formData.append("deletedByLecturer", deletedByLecturer);

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

  renderCategoryUI() {
    return (
      <div>
        <CheckboxTree
          nodes={nodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={(checked) => this.setState({ checked })}
          onExpand={(expanded) => this.setState({ expanded })}
        />
      </div>
    );
  }

  renderDateUI() {
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onStartDateChange={(startDate) => this.setState({ startDate })}
        onEndDateChange={(endDate) => this.setState({ endDate })}
        minimumDate={new Date()}
        minimumLength={1}
        maximumLength={14}
        format="dd MMM yyyy"
        locale={enGB}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
          <div className="date-range">
            <input
              className={"input" + (focus === START_DATE ? " -focused" : "")}
              {...startDateInputProps}
              placeholder="Start date"
            />
            <span className="date-range_arrow" />
            <input
              className={"input" + (focus === END_DATE ? " -focused" : "")}
              {...endDateInputProps}
              placeholder="End date"
            />
          </div>
        )}
      </DateRangePicker>
    );
  }

  render() {
    const { selectedFiles, message, availableCourses } = this.state;
    const currentUser = AuthService.getCurrentUser();

    const courseList = availableCourses.filter(
      (availablecourse) =>
        availablecourse.departmentId == this.state.departmentId
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

                      {/* userID */}
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

                    
                    {/* Date */}
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="title">
                        Date<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">{this.renderDateUI()}</div>
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
                                {course.courseId} | {course.courseName}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    {/* Purpose */}
                    <div className="form-group">
                      <label className="control-label col-lg-2">
                        Select Purpose<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">{this.renderCategoryUI()}</div>
                    </div>

                    {/* Purpose
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
                    </div> */}

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
