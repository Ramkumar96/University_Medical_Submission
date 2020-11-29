import React, { Component } from "react";
import UploadService from "../../services/upload-files.service";
import authHeader from "../../services/auth-header";
import axios from "axios";

const baseURL = "http://localhost:8080/medical/";

export default class Staffmedicallist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],

      userid: "",
      date: "",
      category: "",
      courseId: "",
      departmentId: "",
      accepted: true,
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(response);
    });

    console.log("CDID MOUNT")
  }

  onDeleteList=(id) =>{
    UploadService.deleteFiles(id)
    .then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
      // return UploadService.getFiles();
    })
    console.log(id)
  }

  onChangeAccept = (id) => {

    // const body = {
    //   accepted : true
    // }
    const { accepted} = this.state;

    let formData = new FormData();

    formData.append("accepted", accepted);

    axios.put(
      baseURL + "files/" + id ,
      formData )
    .then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
      // return UploadService.getFiles();
    })
  //  console.log(body)
  }
  


  render() {
    const { selectedFiles, currentFile, message, fileInfos } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
                Medical Form Submission Details
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
                  {fileInfos &&
                    fileInfos.map((file, index) => (
                      <tr key={index}>
                        <td>{file.userid}</td>
                        <td>{file.date}</td>
                        <td>{file.category}</td>
                        <td>{file.courseId}</td>
                        <td>{file.departmentId}</td>
                        <td>  <a href={file.url}>{file.name}</a></td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-success" onClick={()=>this.onChangeAccept(file.id)}>
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" onClick={()=>this.onDeleteList(file.id)}>
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
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
{
  /* <ul className="list-group list-group-flush">
  {fileInfos &&
    fileInfos.map((file, index) => (
      <li className="list-group-item" key={index}>
        <a href={file.url}>{file.name}</a>
      </li>
    ))}
</ul>; */
}
