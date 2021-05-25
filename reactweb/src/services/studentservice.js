import axios from 'axios';
const BASE_URL="http://localhost:8080/find"
class studenservice{
    getStudent(){
        return axios.get(BASE_URL);
    }
    createStudent(st){
        return axios.post("http://localhost:8080/addstudent",st);
    }
}
export default new studenservice()