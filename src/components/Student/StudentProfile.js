import React, { Component } from "react";
import UploadService from "../../services/upload-files.service";
import AuthService from "../../services/auth.service";

export default class Studentprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],
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

  render() {
    const { fileInfos } = this.state;
    const currentUser = AuthService.getCurrentUser();

    const MedicalListOfUser = fileInfos.filter(
      (fileInfo) => fileInfo.userid == currentUser.userid
    );
    const AcceptedByLecturerMedicalList = MedicalListOfUser.filter(
      (file) => file.acceptedByLecturer == true
    );

    const DeletedByStaffMedicalList = MedicalListOfUser.filter(
        (file) => file.deletedByStaff == true
      );

    const DeletedByLecturerMedicalList = MedicalListOfUser.filter(
        (file) => file.deletedByLecturer == true
      );

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <h3 class="page-header">
              <i class="fa fa-bell fa-2x"></i> Notifications{" "}
            </h3>
          </div>
        </div>

        {AcceptedByLecturerMedicalList &&
          AcceptedByLecturerMedicalList.map((file, index) => (
            <div>
              <div class="alert alert-primary" role="alert">
                Your Medical for <strong>{file.courseId} </strong>
                is accepted by Lecturer
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          ))}
        {DeletedByStaffMedicalList &&
          DeletedByStaffMedicalList.map((file, index) => (
            <div>
              <div class="alert alert-danger" role="alert">
                Your Medical for <strong>{file.courseId} </strong>
                is Rejected by Staff
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          ))}
           {DeletedByLecturerMedicalList &&
          DeletedByLecturerMedicalList.map((file, index) => (
            <div>
              <div class="alert alert-danger" role="alert">
                Your Medical for <strong>{file.courseId} </strong>
                is Rejected by Lecturer
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
