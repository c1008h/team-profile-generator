const inquirer = require('inquirer');
const fs = require('fs')
const generateHTML = require('./utils/generateHTML')
let employees = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            message:'What is your name?',
            name:'name',
        },
        {
            type:'list',
            message:'What is your title?',
            name:'title',
            choices: ['Intern', 'Engineer', 'Manager']
        },
        {
            type:'number',
            message:'What is your id?',
            name:'id',
        },
        {
            type:'input',
            message:'What is your email?',
            name:'email',
        },
    ])    
    .then((answers) => {
        console.log({name: answers.name, title: answers.title, id: answers.id, email: answers.email})
        let firstInput = {name: answers.name, title: answers.title, id: answers.id, email: answers.email}

        if(answers.title == 'Engineer'){
            return inquirer.prompt([
                {
                    type:'input',
                    message:'What is your github?',
                    name:'github',
                }
            ])
            .then((answers) => {
                //console.log({name: answers.github})
                firstInput.github = answers.github
                //console.log(firstInput)
                employees.push(firstInput);
                //console.log(employees)
                //generateHTML(employees);
            })
        }
        if(answers.title == 'Intern'){
            return inquirer.prompt([
                {
                    type:'input',
                    message:'What is your school?',
                    name:'school',
                }
            ])
            .then((answers) => {
                firstInput.school = answers.school
                employees.push(firstInput);
            })
        }
        if(answers.title == 'Manager'){
            return inquirer.prompt([
                {
                    type:'input',
                    message:'What is your office number?',
                    name:'office',
                }
            ])
            .then((answers) => {
                firstInput.office = answers.office
                employees.push(firstInput);
            })
        }
    })
    .then(() => {anotherUser()})
}

const anotherUser = () => {
    return inquirer.prompt([
        {
            type:'confirm',
            message:'Would you like to add another employee?',
            name:'anotheremployee',
        }
    ])
    .then((data) => {
        if(data.anotheremployee) {
            promptUser()
        } 
        else {
            generateHTML(employees)
            console.log('Exit')
        }
        return
    })
}
const init = () => {
    promptUser()
}

init()
