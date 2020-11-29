import React, { Component } from "react";
import UploadService from "../../services/upload-files.service";

export default class Deanmedicallist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],

      userid: "",
      date: "",
      category: "",
      courseId: "",
      departmentId: "",
      accepted: "",
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
    const { selectedFiles, currentFile, message, fileInfos } = this.state;

    const result = fileInfos.filter(fileInfo => fileInfo.category == "finalexam");

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
                Final Exams Medical Form Details
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
                  </tr>
                  {result &&
                    result.map((file, index) => (
                      <tr key={index}>
                        <td>{file.userid}</td>
                        <td>{file.date}</td>
                        <td>{file.category}</td>
                        <td>{file.courseId}</td>
                        <td>{file.departmentId}</td>
                        <td>  <a href={file.url}>{file.name}</a></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
