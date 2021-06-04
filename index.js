const questions = require("./questions");
const inquirer = require("inquirer");

inquirer.prompt(questions.questions).then((response) => console.log(response));
