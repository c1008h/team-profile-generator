const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        super(name, title, id, email)
        this.officenumber = officenumber;
    }
}

module.exports = Manager;