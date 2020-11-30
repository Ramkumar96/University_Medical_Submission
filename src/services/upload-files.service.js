import authHeader from "../services/auth-header";
import axios from "axios";

const baseURL = "http://localhost:8080/medical/";

class UploadFilesService {
  upload(formData) {

    return axios.post(baseURL + "upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getFiles() {
    return axios.get(baseURL + "files", { headers: authHeader() });
  }

  deleteFiles(id) {
    return axios.delete(baseURL + "files/" + id, { headers: authHeader() });
  }
  
}

export default new UploadFilesService();
