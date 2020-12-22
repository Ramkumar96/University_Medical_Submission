import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  addUser(userid,firstname,lastname, mobile,address,username,email,password,courseId,departmentId,resetPasswordToken,role) {
    return axios.post(API_URL + "adduser", {
      userid,
      firstname,
      lastname,
      mobile,
      address,
      username,
      email,
      password,
      courseId,
      departmentId,
      resetPasswordToken,
      role
    });
  }

  register(username, email, password) {
    return axios.put(API_URL + "register", {
      username,
      email,
      password
    });
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
