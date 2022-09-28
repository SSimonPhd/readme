// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const getLicense = require("./utils/getLicense");

// TODO: Create an array of questions for user input
const questions = [
	{
    type: "input",
    name: "title",
    message: "Project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "input",
    name: "contributions",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Select license for application:",
    choices: ["Apache", "MIT", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "git",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(error, "Resubmit.");
    }
  });
}


// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers, "Success!  README.md generated");
    const licenseInfo = getLicense(answers);
    writeToFile("createdReadMe.md", generateMarkdown(answers, licenseInfo));
  });
};

// Function call to initialize app
init();
