const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');

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
    const renderManager = manager => {
        const index = fs.readFileSync('./src/index.html', 'utf8');
        let managerCard = fs.readFileSync('./src/manager.html', 'utf8');
        managerCard = managerCard.replace('{{name}}', manager.getName());
        managerCard = managerCard.replace('{{role}}', manager.getRole());
        managerCard = managerCard.replace('{{id}}', manager.getId());
        managerCard = managerCard.replace('{{email}}', manager.getEmail());
        managerCard = managerCard.replace('{{officeNumber}}', manager.getOfficeNumber());

        cards = managerCard;
        for (var i = 0; i < team.length; i++) {
            var employee = team[i];
            // Cards adds and then equals every new employee card info.
            cards += renderEmployee(employee);
        }


        // add cards into the html
        index = index.replace(/{{cards}}/g, cards);
    };
}

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
function teamBuilder() {

    const index = fs.readFileSync('./src/index.html', 'utf8');

    fs.writeFile('./dist/index.html', index, function (err) {
        if (err) throw err;
        console.log('Congratualtions!!! Your Team is Full')
        console.log('File index.html has been deployed!!');
    });
};

const renderEmployee = (employee) => {
    if (employee.getRole() === "Engineer") {
        let engineerCard = fs.readFileSync('./src/engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getId());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
        return engineerCard;

    } else if (employee.getRole() === "Intern") {
        let internCard = fs.readFileSync('./src/intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getId());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    }
}

addManager();