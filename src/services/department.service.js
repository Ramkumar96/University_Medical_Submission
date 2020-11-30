import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/department/';

class DepartmentService {

    getAllDepartments(){
        return axios.get(API_URL + 'alldepartments' , { headers: authHeader() } );
    }
}
export default new DepartmentService();



