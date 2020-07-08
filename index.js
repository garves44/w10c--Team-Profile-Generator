const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const renderPage = require('./assets/page-render');

const team = [];

function getManager() {
    console.log("Build your Team!");
    inquirer
        .prompt([{
                type: "input",
                name: "managersName",
                message: "Enter the Manager's name?",
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter a name for your Manager')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "managersId",
                message: "Enter the Manager's id?",
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter number greater than 0!');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managersEmail",
                message: "Enter the Manager's email?",
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Enter a valid email address!');
                    return false;
                }
            },
            {
                type: "number",
                name: "managersOfficeNumber",
                message: "Enter the Manager's office number?",
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter a number greater than 0!');
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.managersOfficeNumber);
            team.push(manager);
            addTeam();
        });
};

function addTeam() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'memberRole',
            message: 'Would you like to add another member to your team?',
            choices: ['Engineer', 'Intern', 'No thanks!']
        }]).then(chosen => {
            switch (chosen.memberRole) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'No thanks!':
                    buildTeam();
                    break;
            }
        });
};

function addEngineer() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'engineerName',
                message: 'Enter the name of your Engineer!',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter a name for your Engineer')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'Enter the Engineer ID!',
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter number greater than 0!');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: 'Enter the Engineers email?',
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Enter a valid email address!');
                    return false;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter the Github username of your Engineer!',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter a Github username for your Engineer')
                        return false;
                    }
                    return true;
                }
            }
        ])
}





getManager();