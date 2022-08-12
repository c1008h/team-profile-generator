const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, title, id, email)
        this.github = github;
    }
}

module.exports = Engineer;