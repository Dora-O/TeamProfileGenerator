const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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