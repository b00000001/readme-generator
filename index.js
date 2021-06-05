const questions = require('./questions');
const inquirer = require('inquirer');
const responseHandler = require('./handleResponse');

const responses = {};
inquirer.prompt(questions.questions)
.then(responseHandler);