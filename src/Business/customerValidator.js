import ErrorResult from "../core/utilities/results/errorResult.js";
import Validator from "../core/validation/validator.js";

export default class CustomerValidator extends Validator{
    validate(entity){
        let requiredFields = "id firstName lastName age city creditcardNumber".split(" ")
        let errors =super.checkRequiredFields(entity,requiredFields)

        if(isNaN(entity.age)){
            this.errors.push(new ErrorResult(`Validation problem. ${entity.age} is not a number`))
        }
        return errors

    }
}