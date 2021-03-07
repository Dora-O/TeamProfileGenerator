const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "TMname"
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "TMid"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "TMemail"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "TMnumber"
        },

    ])
}