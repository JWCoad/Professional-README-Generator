// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

// set the fs.writeFile function to use promises
const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What license should your project have?",
    name: "license",
    choices: [
      "MIT",
      "Unlicense",
      "Apache 2.0",
      "GNU v3",
      "BSD 3-Clause",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "What was your motivation for this project?",
    name: "motivation",
  },
  {
    type: "input",
    message: "what resources were used for this project?",
    name: "resources",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repository?",
    name: "usage",
  },
  {
    type: "input",
    message: "Did anyone else contribute to this project?",
    name: "contributors",
  },
];

// Ask questions
const promptUser = () => {
  return inquirer.prompt(questions);
};

// Write FILE!
const writeToFile = (fileName, data) => {
  return writeFileAsync(fileName, data);
};

// Lanuch create and write readme
const init = async () => {
  try {
    console.log(
      "Welcome to the README generator.\nPlease answer the following questions:"
    );

    const answers = await promptUser();
    const fileContent = generateMd(answers);
    await writeToFile("./output/README.md", fileContent);
    console.log("README.md created in output folder.");
  } catch (err) {
    console.error("Error creating README. File not created.");
    console.log(err);
  }
};

// Function call to initialize app
init();
