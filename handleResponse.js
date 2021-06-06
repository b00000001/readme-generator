const fs = require("fs");
const makeReadme = require("./makereadme");
const responseHandler = (response) => {
	makeReadme(response);
	writeFile("./README.md", makeReadme(response));
};

const writeFile = (filename, data) => {
	fs.writeFile(filename, data, (err) => {
		console.log(err);
	});
};

module.exports = responseHandler;
