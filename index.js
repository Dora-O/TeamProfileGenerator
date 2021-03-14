const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//empty array to store employees 
const teamMembers = [];

//questions for manager
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber"
    },
];

//questions for engineer
const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github"
    },
];

//question for intern
const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What univeristy does your intern attend?",
        name: "github"
    },
];

//manager function
function addManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createTeam();
    });
};

//function to add engineer to team 
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamMembers.push(engineer);
        createTeam();
    });
};

//function to add intern to team 
function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern);
        createTeam();
    });
};

//function to add members until user chooses to not add anymore 
function createTeam() {
    inquirer.prompt({
        type: 'list',
        name: 'teamMember',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            'I do not want to add anymore team members.'
        ]
    }).then((userChoice) => {
        switch (userChoice.teamMember) {
            case 'Engineer':
                addEngineer()
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                teamBuilder()
        }
    })
};

//function to create index file with all team members
function teamBuilder(){};

addManager();