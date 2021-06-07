/* 
Github Username
Title of Project
Generate sections for:
1. table of contents
2. description
3. installation
4. usage
5. licenses
6. contributing
7. tests
8. Questions 
*/
/* Academic Free License v3.0
Apache license 2.0
Artistic license 2.0
Boost Software License 1.0
BSD 2-clause "Simplified" license
BSD 3-clause "New" or "Revised" license
BSD 3-clause Clear license
Creative Commons license
Creative Commons Zero v1.0 Universal
Creative Commons Attribution 4.0
Creative Commons Attribution Share Alike 4.0
Do What The F*ck You Want To Public License
Educational Community License v2.0
Eclipse Public License 1.0
Eclipse Public License 2.0
European Union Public License 1.1
GNU Affero General Public License v3.0
GNU General Public License
GNU General Public License v2.0
GNU General Public License v3.0
GNU Lesser General Public License
GNU Lesser General Public License
GNU Lesser General Public License
ISC	isc
LaTeX Project Public License v1.3c
Microsoft Public License
MIT
Mozilla Public License 2.0
Open Software License 3.0
PostgreSQL License
SIL Open Font License 1.1
University of Illinois/NCSA Open Source License
The Unlicense
zLib License */

const questions = [
	{
		type: "input",
		name: "userName",
		message: "Please enter your Github User Name",
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your email address.",
	},
	{
		type: "input",
		name: "projectTitle",
		message: "Please enter the title of your project.",
	},
	{
		type: "input",
		name: "repoDescription",
		message: "Please enter your repo description.",
	},
	{
		type: "confirm",
		name: "installInstructions",
		message: "Do you have special installation instructions? ",
	},
	{
		type: "input",
		name: "specialInstructions",
		message: "Enter special installation instructions here",
		when: (specialInstruction) => specialInstruction.installInstructions
	},
	{
		type: "list",
		name: "licenseType",
		message: "Please enter the Apache License you would like to use",
		choices: [
			"Apache 2.0 License",
			"Boost Software License 1.0",
			"BSD 3-Clause License",
		],
	},
	{
		type: "confirm",
		name: "testsAvailable",
		message: "Do you have any Tests for this repo?",
		default: false
	},
	{
		type: "input",
		name: "tests",
		message: "Please enter any tests you have.",
		when: (tests) => tests.testsAvailable
	},
	{
		type: "confirm",
		name: "usageInstructions",
		message: "Do you have any Usage instructions for this repo?",
		default: false
	},
	{
		type: "confirm",
		name: "instructions",
		message: "Enter additional Instructions.",
		when: (instruction) => instruction.usageInstructions
	},
	{
		type: "confirm",
		name: "additionalCollaborators",
		message: "Do you have additional collaborators?",
		default: false
	},
	{
		type: "input",
		name: "collaborators",
		message: "Enter the information for the additional collaborators here.",
		when: (collaborator) => collaborator.additionalCollaborators
	},
];

module.exports = { questions};
