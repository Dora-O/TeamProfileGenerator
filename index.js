const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = [];

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

function addManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createTeam();
    });
};
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamMembers.push(engineer);
        createTeam();
    });
};
function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern);
        createTeam();
    });
};
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
function teamBuilder(){};

addManager();