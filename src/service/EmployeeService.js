import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/employee";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "http://localhost:8080",
    }
  };
class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee,axiosConfig);
    }
}
const obj = new EmployeeService();
export default obj;