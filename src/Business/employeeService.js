import SuccessDataResult from "../../core/utilities/results/successDataResult.js"
import Message from "../constant/message.js";
import CheckValidation from "../..core/validation/checkValidation.js"
import SuccessResult from "../../core/utilities/results/successResult.js"

export default class EmployeeService{

    constructor(employeeDal,validator,logger){
        this.employeeDal=employeeDal
        this.validator=validator
        this.logger=logger
    }

    getAll(){
        return new SuccessDataResult(employeeDal.getAll(),Message.prototype.listed())
    }

    getById(id){
        return new SuccessDataResult(this.employeeDal.getById(id),Message.prototype.listed())
    }

    add(employee){
      CheckValidation.prototype.validate(this.validator,employee)

      this.customerDal.add(employee)
      this.logger.log(employee)
      return new SuccessResult(Message.prototype.added())
    }
}