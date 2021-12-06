import ErrorResult from "../utilities/results/errorResult.js"


export default class Validator{
    
    checkRequiredFields(entity, requiredFields) {
      let errors = []
      for (const field of requiredFields) {
        if (!entity[field]) {
            errors.push(new ErrorResult(`Validation problem. ${field} is required`))
        }
    }
    return errors
  }
}