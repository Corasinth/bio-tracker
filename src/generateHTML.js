const Employee = require ('../lib/Employee')
const Engineer = require ('../lib/Engineer')
const Intern = require ('../lib/Intern')
const Manager = require ('../lib/Manager')

//Iterates through obj
function iterator1(inputArr) {
    
}
// Creates HTML
function generateHTML(data) {
    let special
    let htmlStr = `<!DOCTYPE html>
    <html lang='en'>
    
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
        <title>Employee Information</title>
    </head>
    <header>
        <h1 class="bg-primary text-success text-center">Employee Information</h1>
    </header>
    <body>`
    for (obj of data) {
        if (obj.getRole()==='Engineer') {
            special = obj.getGithub()
        } else if (obj.getRole() === 'Manager') {
            special = obj.getOfficeNumber()
        } else if (obj.getRole()=== 'Intern') {
            special = obj.getSchool()
        }
        console.log(special)
        htmlStr += `<div class="card bg-info text-center m-1">
            <h5 class="card-header">${obj.name}</h5>
            <div class="card-body text-warning">
                <h5 class="card-title">${obj.getRole()}</h5>
                <h7 class="card-text">${obj.getName()}</h7>
                <p class="card-text">${obj.getId()}</p>
                <p class="card-text">${obj.getEmail()}</p>
                <p class="card-text">${special}</p>
            </div>
        </div>`
    }
    htmlStr += `</body></html>`
    return htmlStr;
}

module.exports = generateHTML;