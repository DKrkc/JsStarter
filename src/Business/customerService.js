import SuccessDataResult from "../core/utilities/results/successDataResult.js"
import Message from "./constant/message.js"
import CheckValidation from "../core/validation/checkValidation.js"
import SuccessResult from "../core/utilities/results/successResult.js"


export default class CustomerService {

    constructor(customerDal,validator,logger){
        this.customerDal=customerDal
        this.validator=validator
        this.logger=logger
    }

    getAll(){
        return new SuccessDataResult(this.customerDal.getAll(),Message.prototype.listed())
    }

    getById(id){
        return new SuccessDataResult(this.customerDal.getById(id),Message.prototype.listed())
    }

    add(customer){
      CheckValidation.prototype.checkValidation(this.validator,customer)

      this.customerDal.add(customer)
      this.logger.log(customer)
      return new SuccessResult(Message.prototype.added())
    }

    getCustomerShorted(){
        return new SuccessDataResult(this.customerDal.getUserShorted())
    }
}