import CustomerService from "../Business/customerService.js"
import CustomerDal from "../dataAccess/customerDal.js"
import CustomerValidator from "../business/customerValidator.js"
import {ElasticLogger } from "../core/logging/logger.js"
import Customer from "../entities/customer.js"

let customerService=new CustomerService(new CustomerDal(), new CustomerValidator(),new ElasticLogger())
console.log(customerService.getAll())

console.log(customerService.getCustomerShorted())
console.log(customerService.getById(4))
console.log(customerService.add(new Customer(7,"Zeytin","Peynir",12,"Sivas","1239")))
