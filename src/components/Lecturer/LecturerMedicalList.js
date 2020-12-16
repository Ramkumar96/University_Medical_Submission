import React, { Component } from "react";
import UploadService from "../../services/upload-files.service";
import AuthService from "../../services/auth.service";
import axios from "axios";

const baseURL = "http://localhost:8080/medical/";

export default class Lecturermedicallist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],

      userid: "",
      date: "",
      category: "",
      courseId: "",
      departmentId: "",

      acceptedByLecturer: true,
      deletedByLecturer: true,

    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(response);
    });
  }

  
  onDeleteList=(id) => {
    const { deletedByLecturer } = this.state;
    let formData = new FormData();
    formData.append("deletedByLecturer", deletedByLecturer);
    axios.put(
      baseURL + "files/deletedByLecturer/" + id ,
      formData )
    .then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
    })
  }

  onChangeAccept = (id) => {
    const { acceptedByLecturer } = this.state;
    let formData = new FormData();
    formData.append("acceptedByLecturer", acceptedByLecturer);
    axios.put(
      baseURL + "files/acceptedByLecturer/" + id ,
      formData )
    .then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
    })
  }

  render() {

    const {fileInfos } = this.state;
    const currentUser = AuthService.getCurrentUser();
    const lecturerMedicalList = fileInfos.filter(fileInfo => fileInfo.courseId == currentUser.courseId);
    const acceptedByStaffMedicalList = lecturerMedicalList.filter(MedList => MedList.acceptedByStaff == true);
    const unAcceptedByLecturerMedicalList = acceptedByStaffMedicalList.filter(List => List.deletedByLecturer == false);

    return (
      <div>
          <div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
                Medical Form Details
              </header>
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>
                      <i className="icon_profile" /> UserID
                    </th>
                    <th>
                      <i className="icon_calendar" /> Date
                    </th>
                    <th>
                      <i className="icon_mail_alt" /> Category
                    </th>
                    <th>
                      <i className="icon_mail_alt" /> CoursrID
                    </th>
                    <th>
                      <i className="icon_mail_alt" /> DepartmentID
                    </th>
                    <th>
                      <i className="icon_mail_alt" /> Medical File
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {unAcceptedByLecturerMedicalList &&
                    unAcceptedByLecturerMedicalList.map((file, index) =>{
                      let categoryList = file.category.split(',');
                    return (
                      <tr key={index}>
                        <td>{file.userid}</td>
                        <td>{file.date}</td>
                        <td>{categoryList.join(" | ")}</td>
                        <td>{file.courseId}</td>
                        <td>{file.departmentId}</td>
                        <td>  <a href={file.url}>{file.name}</a></td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-success" disabled={ file.acceptedByLecturer ? "true":""} onClick={()=>this.onChangeAccept(file.id)}>
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" disabled={ file.acceptedByLecturer ? "true":""}  onClick={()=>this.onDeleteList(file.id)}>
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td> 
                      </tr>
                    )})}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
