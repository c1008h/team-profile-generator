const inquirer = require('inquirer');
let employees = []

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
        let secondInput 

        if(answers.title == 'Engineer'){
            return inquirer.prompt([
                {
                    type:'input',
                    message:'What is your github?',
                    name:'github',
                }
            ])
            .then((answers) => {
                console.log({name: answers.github})
                // let partB = {name: answers.github}
                secondInput.push({github: answers.github})
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
                console.log({name: answers.school})
                firstInput.push({name: answers.school})
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
                console.log({name: answers.office})
                firstInput.push({name: answers.office})
            })
        }
    })
}

// const anotherUser = () => {
//     return inquirer.prompt([
//         {
//             type:'confirm',
//             message:'Would you like to add another employee?',
//             name:'anotheremployee',
//         }
//     ])
//     .then((data) => {
//         if(data.anotheremployee == 'yes' || 'y') {
//             promptUser()
//         } 
//         if(data.anotheremployee == 'no' || 'n') {
//             console.log('Exit')
//         }
//         return
//     })
// }

promptUser()
// .then(() => {anotherUser()})
