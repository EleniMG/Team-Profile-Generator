const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { array } = require("yargs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter the manager's name",
        validate: value => /([A-Z]+)(\s*)/gi.test(value)
    },
    {
        type: 'number',
        name: 'managerID',
        message: "Please enter the manager's ID",
        validate: value => /([0-9]+)/gi.test(value)
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the manager's email",
        validate: value => /(\w+)@(\w+)\.(\w+)/gi.test(value)
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the office number",
        validate: value => /([0-9]+)/gi.test(value)
    }
]

const newEmployee = {
    type: 'list',
    name: 'nextEmployee',
    message: "Please select an option:",
    choices: ["Engineer", "Intern", "Finished building my team"]
}

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter the engineer's name",
        validate: value => /([A-Z]+)(\s*)/gi.test(value)
    },
    {
        type: 'number',
        name: 'engineerID',
        message: "Please enter the engineer's ID",
        validate: value => /[0-9]+/gi.test(value)
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer's email",
        validate: value => /(\w+)@(\w+)\.(\w+)/gi.test(value)
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the GitHub username",
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Please enter the intern's name",
        validate: value => /([A-Z]+)(\s*)/gi.test(value)
    },
    {
        type: 'number',
        name: 'internID',
        message: "Please enter the intern's ID",
        validate: value => /[0-9]+/gi.test(value)
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email",
        validate: value => /(\w+)@(\w+)\.(\w+)/gi.test(value)
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school name",
        validate: value => /(\w+)(\s*)/gi.test(value)

    }
]

const arrayOfEmployees = []

class Team {
    init(){
        return inquirer.prompt(questions)
        .then((value) => {
            arrayOfEmployees.push(value);
            console.log(value)
            this.newEmployeePrompt();
        })
    }

    newEmployeePrompt(){
        inquirer.prompt(newEmployee).then((value) => {
            if(value.nextEmployee === "Engineer"){
                this.askEngineerQuestions();
            } else if(value.nextEmployee === "Intern"){
                this.askInternQuestions();
            } else {
                console.log(arrayOfEmployees)
                console.log("DONE!")
                // fs.writeFile('../output/team.html', arrayOfEmployees)
            }

        })
        
    }

    askEngineerQuestions(){
        inquirer.prompt(engineerQuestions).then((value) => {
            arrayOfEmployees.push(value);
            this.newEmployeePrompt()
        });
                
    }

    askInternQuestions(){
        inquirer.prompt(internQuestions).then((value) => {
            arrayOfEmployees.push(value);
            this.newEmployeePrompt()
        });
    }
}

const team = new Team();
team.init()