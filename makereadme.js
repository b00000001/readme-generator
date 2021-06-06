const licenseBadges = {
	"Apache 2.0 License": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
	"Boost Software License 1.0": `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
	"BSD 3-Clause License": `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
	"BSD 2-Clause License": `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
};

const generateReadme = (res) => {
	// console.log(res);
	// res.licenseType.forEach((license) => {
	// 	console.log(typeof license, license);
	// 	// console.log(licenseBadges.apache[license]);
	// });
	switch (res.licenseType) {
		case "Apache 2.0 License":
			res.licenseType = licenseBadges[res.licenseType];
			break;
	}

	return `<h1 align='center'>${res.projectTitle}</h1>

# Description
${res.repoDescription}

# Table of Contents 
1. <a href='#Installation'>Installation
2. <a href='#Usage'>Usage
3. <a href='#License'>License
4. <a href='#Contributing'>Contributing
5. <a href='#Tests'>Tests
6. <a href='#Questions'>Questions</a>

# Installation
1. Clone the Repo. (\`\`\`git clone https://github.com/your_username_/Project-Name.git\`\`\`
)
2. Install NPM packages. (\`\`\`npm install\`\`\`)
3. ${res.installInstructions}

${res.usageInstructions ? `# Usage` : ""}

# License
${res.licenseType}

# Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
1. Fork the Project
2. Create your Feature Branch (\`\`\`git checkout -b feature/AmazingFeature\`\`\`)
3. Commit your Changes (\`\`\`git commit -m 'Add some AmazingFeature'\`\`\`)
4. Push to the Branch (\`\`\`git push origin feature/AmazingFeature\`\`\`)
5. Open a Pull Request

# Collaborators 
 1. ${res.userName}

${res.testsAvailable ? `# Tests` : ""}

# Questions
    `;
};

module.exports = generateReadme;

/* 
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions 
*/
