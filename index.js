const questions = require("./questions");
const inquirer = require("inquirer");
const responseHandler = require("./handleResponse");

inquirer.prompt(questions.questions).then(responseHandler);
