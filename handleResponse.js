const fs = require("fs");
const makeReadme = require("./makereadme");
const responseHandler = (response) => {
	makeReadme(response);
};

fs.writeFile("./README.md", makeReadme(), (err) => {
	console.log(err);
});

module.exports = responseHandler;
