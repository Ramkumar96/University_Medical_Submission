// import http from "../http-common";
import http from "../services/http-common";
import authHeader from "../services/auth-header";
import axios from "axios";

// export default function authHeader() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.accessToken) {
//     return { Authorization: 'Bearer ' + user.accessToken };
//   } else {
//     return { };
//   }
// }

const baseURL = "http://localhost:8080/medical/";

class UploadFilesService {
  upload(formData) {
    // let formData = new FormData();

    // let userid = "wew"
    // let date= "12/8/2021"
    // let category= "exam"
    // let courseId= "L789"
    // let departmentId= "D5"
    // let accepted= false

    // formData.append("file", file);
    // formData.append("userid", userid) ;
    // formData.append("date", date);
    // formData.append("category", category);
    // formData.append("courseId", courseId);
    // formData.append("departmentId", departmentId);
    // formData.append("accepted", accepted);

    return axios.post(baseURL + "upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // return http.post("/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Authorization": "'Bearer ' + user.accessToken"
    //   },
    //   onUploadProgress,
    // });
  }

  getFiles() {
    return axios.get(baseURL + "files", { headers: authHeader() });
  }

  // downloadFiles(url) {
  //   return axios.get( url, { headers: authHeader()} );
  // }

  deleteFiles(id) {
    return axios.delete(baseURL + "files/" + id, { headers: authHeader() });
  }

  // updateAccepted(id, body) {
  //   return axios.put(baseURL + "files/" + id, body, { headers: authHeader() });
  // }
}

export default new UploadFilesService();
