//Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const Employee = require ('./lib/Employee')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')
const Manager = require ('./lib/Manager')

// Array of questions for user input
const questions = [ 
    {
    type: "list",
    message: "Please choose your employee type",
    name: "type",
    choices: ['Manager', 'Engineer', 'Intern']
    },
    {
    type: "input",
    message: "Please enter your employee's name:",
    name: "name"
    },
    {
    type: "input",
    message: "Please enter your employee's ID number:",
    name: "id"
    },
    {
    type: "input",
    message: "Please enter your employee's email:",
    name: "email"
    },
]
engineerQ = [
    {
    type: "input",
    message: "PLease enter your engineer's github:",
    name: "github"
    }, 
] 
managerQ = [
    {
    type: "input",
    message: "PLease enter your manager's office number:",
    name: "officeNum"
    }, 
] 
internQ = [
    {
    type: "input",
    message: "PLease enter your intern's school:",
    name: "school"
    }, 
] 

// Function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('html file has been succesfully generated')
    })
};

//  Function to initialize app
async function init() {
    let data = await inquirer.prompt(questions);
    switch (data.type) {
        case "Engineer":
        var data1 = await inquirer.prompt(engineerQ);
        var obj = new Engineer (data.name, data.id, data.email, data1.github)
        break;
        case "Manager":
        var data1 = await inquirer.prompt(managerQ);
        var obj = new Manager (data.name, data.id, data.email, data1.officeNum)
        break;
        case "Intern":
        var data1 = await inquirer.prompt(internQ);
        var obj = new Intern (data.name, data.id, data.email, data1.school)
        break;
    }
    let htmlString = generateHTML(obj);
    writeToFile('./dist/index.html', htmlString)
};

// Function call to initialize app
init();
