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
		when: (specialInstruction) => specialInstruction.installInstructions,
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
		default: false,
	},
	{
		type: "input",
		name: "tests",
		message: "Please enter any tests you have.",
		when: (tests) => tests.testsAvailable,
	},
	{
		type: "confirm",
		name: "usageInstructions",
		message: "Do you have any Usage instructions for this repo?",
		default: false,
	},
	{
		type: "input",
		name: "instructions",
		message: "Enter additional Instructions.",
		when: (instruction) => instruction.usageInstructions,
	},
	{
		type: "confirm",
		name: "additionalCollaborators",
		message: "Do you have additional collaborators?",
		default: false,
	},
	{
		type: "input",
		name: "collaborators",
		message: "Enter the information for the additional collaborators here.",
		when: (collaborator) => collaborator.additionalCollaborators,
	},
];

module.exports = { questions };
