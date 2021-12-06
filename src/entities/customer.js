import User from "./user.js";

export default class Customer extends User{
    constructor(id,firstName,lastName,age,city,creditcardNumber){
        super(id,firstName,lastName,age,city)
        this.creditcardNumber=creditcardNumber
    }

}