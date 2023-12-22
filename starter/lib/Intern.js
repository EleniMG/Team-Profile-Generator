// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        if(typeof this.school === "string"){
            return this.school;
        } else {
            console.log("Please enter a valid school name")
            this.getSchool()
        } 
    }

    getRole(){
        return "Intern"
    }

}

module.exports = Intern;