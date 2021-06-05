const fs = require('fs');
const readme = require('./readmetemplate');

const userValues = {};

const responseHandler = (response) => {
    readme.values.userName = response.userName
}

module.exports = responseHandler;

// fs.writeFile('README.md', JSON.stringify(response, null, 2), (err) => {
//   console.log(response);  
// });