const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/renderTeamPage");

/* TODO: create Inquirer questions list */
const questions = [];

/* Initializes app and starts prompt */
function init() {
  var dir = './dist';

  // Create output directory if it doesn't already exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  inquirer.prompt(questions)
    .then(answers => {
      /* TODO: Process answers into data for team page render */
      let data = "";

      /* Write HTML to file */
      fs.writeFile(dir + "/index.html", render.teamPage(data), err => {
        err ? console.log(err) : console.log("HTML file written successfully.")
      });

      /* Write CSS to file */
      fs.writeFile(dir + "/style.css", render.CSS(), err => {
        err ? console.log(err) : console.log("CSS file written successfully.");
      });
    });
}

init();