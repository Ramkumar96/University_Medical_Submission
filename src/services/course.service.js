import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/course/';

class CourseService {

    getAllCourses(){
        return axios.get(API_URL + 'allcourses' , { headers: authHeader() } );
    }
}
export default new CourseService();



