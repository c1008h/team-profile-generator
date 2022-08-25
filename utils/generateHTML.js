const fs = require('fs')

const generateHTML = (employees) => {
    console.log(employees)

    let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container" id="container">
            <div class="row" id="row">
                <div class="row team-area col-12 d-flex justify-content-center" id="innerRow">
                    ${generateCard(employees)}
                </div>
            </div>
        </div>
    </body>
</html>`
 fs.writeFile('./dist/index.html', html, (err) => {
     if (err) {
         console.error(err)
    } else { 
        console.log('successful')
    }
 })
}

const generateCard = (employees) => {
    let cards 

    for(let i = 0; i < employees.length; i++) {
        const card = `<div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title"> ${employees[i].name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employees[i].title}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${employees[i].id}</li>
                <li class="list-group-item"> Email: <a href="${employees[i].email}">${employees[i].email}</a></li>
                <li class="list-group-item">${(employees[i].title == 'Manager') ? 'Office: ' + employees[i].office: ''} ${(employees[i].title == 'Intern') ? 'School: ' + employees[i].school: ''} ${(employees[i].title == 'Engineer') ? 'Github: ' + employees[i].github: ''}</li>
            </ul>
        </div>
    </div>`
        cards = cards + card
    }
    console.log(cards)
    return cards
}

module.exports = generateHTML;
