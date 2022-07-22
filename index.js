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
const engineerQ = [
    {
    type: "input",
    message: "PLease enter your engineer's github:",
    name: "github"
    }, 
] 
const managerQ = [
    {
    type: "input",
    message: "PLease enter your manager's office number:",
    name: "officeNum"
    }, 
] 
const internQ = [
    {
    type: "input",
    message: "PLease enter your intern's school:",
    name: "school"
    }, 
] 
const repeatQ = [
    {
        type: "confirm",
        message: "Would you like to add another employee? y/n",
        name: "repeat",
        default: false
    }
]
// Function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('html file has been succesfully generated')
    })
};


// function to ask questions
async function askQuestions() {
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
    return obj
}

//  Function to initialize app
let objArray =[]
async function init() {
    let response = await askQuestions()
    objArray.push(response)    

    let repeat = await inquirer.prompt(repeatQ)
    if (repeat.repeat === true) {
       init()
    } else {
    let htmlString = generateHTML(objArray);
    writeToFile('./dist/index.html', htmlString)
    objArray=[]
    }
};

// Function call to initialize app
init();
