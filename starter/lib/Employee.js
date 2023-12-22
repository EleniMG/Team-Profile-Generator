// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        if(typeof this.name === "string"){
            return this.name;
        } else {
            console.log("Please enter a valid name");
            this.getName()
        }    
        
    }

    getId(){
        if(typeof this.id === "number"){
            return this.id;
        } else {
            console.log("Please enter a valid ID");
            this.getId()
        }    
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }
}


module.exports = Employee;