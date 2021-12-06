//import ErrorResult from "../utilities/results/errorResult.js"

export default class CheckValidation {
   
    checkValidation(validator, entity){
        let errors = validator.validate(entity)
        
        if(errors.length > 0){
           console.log(errors)
           // return new ErrorResult("Error!")
           throw new Error("Hata var!")
        }
    }

}