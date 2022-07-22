//Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

// Array of questions for user input
const questions = [ 
    {
    type: "list",
    message: "Please choose your employee type",
    name: "type",
    choices: ['Employee', 'Manager', 'Engineer', 'Intern']
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
        err ? console.error(err) : console.log('readme.md has been succesfully generated')
    })
};

//  Function to initialize app
async function init() {
    let data = await inquirer.prompt(questions);
    switch (data.type) {
        case "Engineer":
        var dataType = await inquirer.prompt(engineerQ);
        break;
        case "Manager":
        var dataType = await inquirer.prompt(managerQ);
        break;
        case "Intern":
        var dataType = await inquirer.prompt(internQ);
        break;
    }
    let htmlString = generateHTML(data, dataType);
    writeToFile('index.html', htmlString)
};

// Function call to initialize app
init();
