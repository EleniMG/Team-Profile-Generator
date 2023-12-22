// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        if(typeof this.officeNumber === "number"){
            return this.officeNumber;
        } else {
            console.log("Please enter a valid office number")
            this.getOfficeNumber()
        }    
        
    }

    getRole(){
        return "Manager"
    }
    
}

module.exports = Manager;