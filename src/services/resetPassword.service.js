import axios from "axios";

const API_URL = "http://localhost:8080/resetPassword/";

class ResetPasswordService {

  forgotpasswordsendmail(formData) {
    return axios
      .post(API_URL + "forgotPasswordSendMail",formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(response);
        return response.data;
        });
  }

  resetPassword(formData) {
    return axios
      .post(API_URL + "reset_password",formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(response);
        return response.data;
        });
  }

//   logout() {
//     localStorage.removeItem("user");
//   }

//   addUser(userid,firstname,lastname, mobile,address,username,email,password,courseId,departmentId,resetPasswordToken,role) {
//     return axios.post(API_URL + "adduser", {
//       userid,
//       firstname,
//       lastname,
//       mobile,
//       address,
//       username,
//       email,
//       password,
//       courseId,
//       departmentId,
//       resetPasswordToken,
//       role
//     });
//   }

//   register(username, email, password) {
//     return axios.put(API_URL + "register", {
//       username,
//       email,
//       password
//     });
//   }
  
//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));;
//   }

}

export default new ResetPasswordService();
