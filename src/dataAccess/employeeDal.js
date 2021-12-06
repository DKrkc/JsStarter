import Repository from "../core/repository.js"
import Employee from "../../entities/concrete/employee.js";
export default class EmployeeDal extends Repository{
    constructor(){
        super([
            new Employee(1, "Yağmur", "Sevgi",25,"İzmir", 6000),
            new Employee(2, "Su", "Ateş", 24, "Antalya",17000),
            new Employee(3, "Mehtap", "Toprak",30, "Eskişehir", 15000)
        ])
    }
   
    
    

}