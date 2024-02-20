// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3-Clause']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, 'example', fileName);
    fs.writeFileSync(filePath, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
      console.log('README.md has been generated successfully.');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
