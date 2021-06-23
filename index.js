// TODO: Include packages needed for this application
const fs = require("fs");
const fs = require("path");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "enter project title",
  },
  {
    type: "input",
    name: "description",
    message: "enter project description",
  },
  {
    type: "input",
    name: "installation instructions",
    message: "enter installation instruction",
  },
  {
    type: "input",
    name: "usage information",
    message: "enter usage information",
  },
  {
    type: "input",
    name: "contribution guidelines",
    message: "enter contribution guidelines",
  },
  {
    type: "input",
    name: "test instructions",
    message: "enter test instructions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
