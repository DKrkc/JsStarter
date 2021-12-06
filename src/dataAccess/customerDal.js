import Repository from "../core/dataAccess/repository.js";
import Customer from "../entities/customer.js";

export default class CustomerDal extends Repository{
    constructor(){
        super([
            new Customer(4, "Aleyna", "Bade",35,"Ankara", "12345"),
            new Customer(5, "Hazal", "Işıl", 18, "Trabzon","12346"),
            new Customer(6, "Emre", "Kıvanç",45, "Mersin", "12347")
        ])
        // this.customers = [
        //     new Customer(4, "Aleyna", "Bade",35,"Ankara", "12345"),
        //     new Customer(5, "Hazal", "Işıl", 18, "Trabzon","12346"),
        //     new Customer(6, "Emre", "Kıvanç",45, "Mersin", "12347")
        // ]
    }

    

}