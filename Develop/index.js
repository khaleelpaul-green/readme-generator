// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be used to install necessary depencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'What license is the project under?',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'none']
    },
    {
        type: 'input',
        message: 'What command is used to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile('README.md', genMarkdown(data))
        })
}

// Function call to initialize app
init();
